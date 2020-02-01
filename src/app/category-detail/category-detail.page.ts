import { Component, OnInit } from '@angular/core';
import { Category, TicketType } from '../common/model/category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../common/services/categories.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'tb-category-detail',
    templateUrl: './category-detail.page.html',
    styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
    category: Category;
    summary: { [type: string]: number } = {};
    total = 0;

    constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.route.paramMap.pipe(map(params => this.categoriesService.getCategory(params.get('categoryId')))).subscribe(c => {
            this.category = c;
            this.initSummary();
        });
    }

    public addTicket(type: TicketType) {
        console.log('ticket click', type);
        this.summary[type.name]++;
        this.total++;
    }

    private initSummary() {
        this.category.tickets.forEach(ticketType => {
            this.summary[ticketType.name] = 0;
        });
    }
}
