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

    @Input()
    public multipleSelection = true;

    @Output()
    public select: EventEmitter<Category[]> = new EventEmitter();

    private categoriesSelected: Category[];

    constructor() {}

    ngOnInit() {
        if (!this.multipleSelection) {
            this.categoriesSelected = [this.categories[0]];
        } else {
            this.categoriesSelected = this.categories;
        }
    }

    isSelected(category: Category): boolean {
        return !!this.categoriesSelected.find(c => c.id === category.id);
    }

    toggle(category: Category): void {
        if (this.isSelected(category)) {
            this.unselectCategory(category);
        } else {
            this.selectCategory(category);
        }
        this.select.emit(this.categoriesSelected);
    }

    private selectCategory(category: Category): void {
        this.categoriesSelected = this.multipleSelection ? this.categoriesSelected.concat(category) : [category];
    }

    private unselectCategory(category: Category): void {
        this.categoriesSelected = this.multipleSelection ? this.categoriesSelected.filter(c => c.id !== category.id) : [];
    }
}
