import { Component, OnInit } from '@angular/core';
import { Category } from './model/category.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public categories: Array<Category> = [
        { name: 'Bebida', icon: 'beer', color: 'food' },
        { name: 'Comida', icon: 'pizza', color: 'drink' },
        { name: 'Otros', icon: '', color: 'warning' },
    ];

    constructor() {}

    ngOnInit() {}
}
