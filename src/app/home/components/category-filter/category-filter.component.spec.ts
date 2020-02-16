import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterComponent } from './category-filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CategoryFilterComponent', () => {
    let component: CategoryFilterComponent;
    let fixture: ComponentFixture<CategoryFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryFilterComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
