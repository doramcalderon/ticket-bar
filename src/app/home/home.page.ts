import { Component, OnInit } from '@angular/core';
import { Category } from '../common/model/category.model';
import { CategoriesService } from '../common/services/categories.service';

import { Observable } from 'rxjs';

import { CartService } from '../cart/store/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public categories: Category[];
    public categoriesSelected: Category[];
    ticketsCountByType$: { [type: string]: Observable<number> } = {};

    constructor(private categoriesService: CategoriesService, private cartService: CartService) {}

    ngOnInit() {
        this.categories = this.categoriesService.getAllCategories();
        this.categoriesSelected = this.categories;
        this.categories.forEach(c => this.initSummary(c));
    }

    filterCategories(categoriesFilter: Category[]): void {
        const categoriesId: string[] = categoriesFilter.map(c => c.id);
        this.categoriesSelected = this.categories.filter(c => !!categoriesId.find(id => id === c.id));
    }

    private initSummary(category: Category) {
        if (!!category.tickets) {
            category.tickets.forEach(ticketType => {
                this.ticketsCountByType$[ticketType.name] = this.cartService.getTicketsTypeCount(ticketType);
            });
        }
    }
}
