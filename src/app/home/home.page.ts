import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartService } from '../cart/store/cart.service';
import { Category } from '../common/model/category.model';
import { loadCategories } from '../config/categories-config/store/categories.actions';
import { selectCategories } from '../config/categories-config/store/categories.selectors';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public categories$: Observable<Category[]>;
    public categories: Category[];
    public categoriesSelected: Category[];
    ticketsCountByType$: { [type: string]: Observable<number> } = {};

    constructor(private cartService: CartService, private categoriesStore: Store<Category>) {}

    ngOnInit() {
        this.categories$ = this.categoriesStore.select(selectCategories);
        this.categories$.subscribe((categories) => this.initialize(categories));
        this.categoriesStore.dispatch(loadCategories());
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
