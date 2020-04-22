import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesService } from '../../../common/services/categories.service';
import { CategoriesListComponent } from './categories-list.component';

describe('CategoriesListComponent', () => {
    let component: CategoriesListComponent;
    let fixture: ComponentFixture<CategoriesListComponent>;

    const categoriesServiceStub = {
        getAllCategories: () => [],
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesListComponent],
            imports: [IonicModule.forRoot()],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: CategoriesService, useValue: categoriesServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
