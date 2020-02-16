import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CategoriesService } from '../common/services/categories.service';
import { CartService } from '../cart/store/cart.service';
import { TicketType } from '../common/model/category.model';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    const categoriesServiceStub = {
        getAllCategories: () => [],
    };

    const cartServiceStub = {
        getTicketsTypeCount: (t: TicketType): number => 0,
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot()],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: CategoriesService, useValue: categoriesServiceStub },
                { provide: CartService, useValue: cartServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
