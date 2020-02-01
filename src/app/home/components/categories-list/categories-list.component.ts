import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/model/category.model';
import { CategoriesService } from 'src/app/common/services/categories.service';

@Component({
    selector: 'tb-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
    public categories: Array<Category>;

    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.categories = this.categoriesService.getAllCategories();
    }
}
