import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Category } from '../../../common/model/category.model';

@Component({
    selector: 'tb-category-button',
    templateUrl: './category-button.component.html',
    styleUrls: ['./category-button.component.scss'],
})
export class CategoryButtonComponent {
    @Input() category: Category;

    constructor() {}
}
