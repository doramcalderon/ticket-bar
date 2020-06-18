import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

import { CartService } from '../cart/store/cart.service';
import { Category } from '../common/model/category.model';
import { RootPage } from '../common/root-page';
import { loadCategories } from '../config/categories-config/store/categories.actions';
import { selectCategories } from '../config/categories-config/store/categories.selectors';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage extends RootPage implements OnInit, OnDestroy {
    public categories$: Observable<Category[]>;
    public categories: Category[];
    public categoriesSelected: Category[];
    ticketsCountByType$: { [type: string]: Observable<number> } = {};

    private categoriesSubscription: Subscription;

    constructor(
        alertCtrl: AlertController,
        platform: Platform,
        translate: TranslateService,
        private cartService: CartService,
        private categoriesStore: Store<Category>,
    ) {
        super(alertCtrl, platform, translate);
    }

    ngOnInit() {
        this.categories$ = this.categoriesStore.select(selectCategories);
        this.categoriesSubscription = this.categories$.subscribe((categories) => this.initialize(categories));
        this.categoriesStore.dispatch(loadCategories());
    }

    ngOnDestroy() {
        this.categoriesSubscription.unsubscribe();
    }

    filterCategories(categoriesFilter: Category[]): void {
        const categoriesId: string[] = categoriesFilter.map((c) => c.id);
        this.categoriesSelected = this.categories.filter((c) => !!categoriesId.find((id) => id === c.id));
    }

    private initialize(categories: Category[]): void {
        this.categories = categories;
        if (!!categories && categories.length > 0) {
            this.categoriesSelected = [this.categories[0]];
            categories.forEach((c) => this.initSummary(c));
        }
    }

    private initSummary(category: Category) {
        if (!!category.tickets) {
            category.tickets.forEach((ticketType) => {
                this.ticketsCountByType$[ticketType.name] = this.cartService.getTicketsTypeCount(ticketType);
            });
        }
    }
}
