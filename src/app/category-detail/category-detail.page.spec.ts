import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { of } from 'rxjs';

import { CartService } from '../cart/store/cart.service';
import { Category, TicketType } from '../common/model/category.model';
import { CategoriesService } from '../common/services/categories.service';
import { CategoryDetailPage } from './category-detail.page';

describe('CategoryDetailPage', () => {
    let component: CategoryDetailPage;
    let fixture: ComponentFixture<CategoryDetailPage>;

    const activatedRouteStub = {
        paramMap: of({
            get: (name: string): string => '',
        }),
    };
    const categoriesServiceStub = {
        getCategory: (id: string): Category => ({ id: 'foo', name: '' }),
    };
    const cartServiceStub = {
        addTicket: (ticket: TicketType): void => {},
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryDetailPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: CategoriesService, useValue: categoriesServiceStub },
                { provide: CartService, useValue: cartServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoryDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
