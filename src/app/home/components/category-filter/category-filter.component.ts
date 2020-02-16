import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../../common/model/category.model';

@Component({
    selector: 'tb-category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
    @Input()
    public categories: Category[];

    @Output()
    public select: EventEmitter<Category[]> = new EventEmitter();

    private categoriesSelected: Category[];

    constructor() {}

    ngOnInit() {
        this.categoriesSelected = this.categories;
    }

    isSelected(category: Category): boolean {
        return !!this.categoriesSelected.find(c => c.id === category.id);
    }

    toggle(category: Category): void {
        this.categoriesSelected = this.isSelected(category)
            ? this.categoriesSelected.filter(c => c.id !== category.id)
            : this.categoriesSelected.concat(category);

        this.select.emit(this.categoriesSelected);
    }
}
