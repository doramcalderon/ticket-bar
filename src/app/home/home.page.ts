import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.model';
import { HomeService } from './services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public categories: Array<Category>;

    constructor(private homeService: HomeService) {}

    ngOnInit() {
        this.categories = this.homeService.loadCategories();
    }
}
