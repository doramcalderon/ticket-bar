import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { Category } from '../../../common/model/category.model';
import { CategoryButtonComponent } from './category-button.component';

describe('CategoryButtonComponent', () => {
    let component: CategoryButtonComponent;
    let fixture: ComponentFixture<CategoryButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryButtonComponent],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoryButtonComponent);
        component = fixture.componentInstance;
        component.category = {} as Category;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
