import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { Ticket } from '../cart/store/cart.model';
import { CartService } from '../cart/store/cart.service';
import { Category, TicketType } from '../common/model/category.model';
import { CategoriesService } from '../common/services/categories.service';

@Component({
    selector: 'tb-category-detail',
    templateUrl: './category-detail.page.html',
    styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
    category: Category;
    summary: { [type: string]: number } = {};

    constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private cartService: CartService) {}

    ngOnInit() {
        this.route.paramMap.pipe(map(params => this.categoriesService.getCategory(params.get('categoryId')))).subscribe(c => {
            this.category = c;
            this.initSummary();
        });
    }

    public addTicket(type: TicketType) {
        this.cartService.addTicket({ type, category: this.category });
    }

    private initSummary() {
        if (!!this.category.tickets) {
            this.category.tickets.forEach(ticketType => {
                this.summary[ticketType.name] = 0;
            });
        }
    }
}
