import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TranslateServiceMock } from 'src/mocks';
import { CartService } from '../cart/store/cart.service';
import { TicketType } from '../common/model/category.model';
import { HomePage } from './home.page';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    const storeStub = {
        select: (selector: any) => of({}),
        dispatch: (action: any) => {},
    };

    const cartServiceStub = {
        getTicketsTypeCount: (t: TicketType): number => 0,
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: Store, useValue: storeStub },
                { provide: TranslateService, useClass: TranslateServiceMock },
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
