import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertController, IonicModule } from '@ionic/angular';

import { Observable, of } from 'rxjs';

import { CartPage } from './cart.page';
import { CartState } from './store/cart.reducer';
import { CartService } from './store/cart.service';

describe('CartPage', () => {
    let component: CartPage;
    let fixture: ComponentFixture<CartPage>;
    let service: CartService;

    const modalCtrlStub = {
        dismiss: (): Promise<boolean> => Promise.resolve(false),
    };
    const cartServiceStub = {
        getCart: (): Observable<CartState> => of({ ticketsCount: 0 }),
        getTotal: (): Observable<number> => of(0),
        getBill: (): Observable<number> => of(0),
    };

    const alertControllerStub = {
        create: (opts: any): Promise<HTMLIonAlertElement> => {
            const alert = {
                present: (): Promise<void> => Promise.resolve(),
            };
            return Promise.resolve(alert as HTMLIonAlertElement);
        },
    };

    const cartState: CartState = {
        summary: {
            drink: {
                category: { id: 'foo', name: 'drink' },
                tickets: {
                    water: {
                        ticket: {
                            category: { id: 'foo', name: 'drink' },
                            type: { name: 'water', price: 1 },
                        },
                        units: 2,
                        total: 2,
                    },
                },
            },
            food: {
                category: { id: 'foo', name: 'food' },
                tickets: {
                    hamburguer: {
                        ticket: {
                            category: { id: 'foo', name: 'food' },
                            type: { name: 'hamburguer', price: 3 },
                        },
                        units: 1,
                        total: 3,
                    },
                },
            },
        },
        ticketsCount: 2,
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: AlertController, useValue: alertControllerStub },
                { provide: CartService, useValue: cartServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CartPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    beforeEach(inject([CartService], (cartSvcInjected: CartService) => {
        service = cartSvcInjected;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should group the cart's tickets by type`, () => {
        spyOn(service, 'getCart').and.returnValue(of(cartState));
        component.ngOnInit();

        expect(component.cartStateSummary.drink.tickets.water).toBeTruthy();
        expect(component.cartStateSummary.food.tickets.hamburguer).toBeTruthy();
    });

    it(`should count the tickets by type`, () => {
        spyOn(service, 'getCart').and.returnValue(of(cartState));
        component.ngOnInit();

        expect(component.cartStateSummary.drink.tickets.water.units).toEqual(2);
        expect(component.cartStateSummary.food.tickets.hamburguer.units).toEqual(1);
    });

    it(`should calculate the total price by type`, () => {
        spyOn(service, 'getCart').and.returnValue(of(cartState));
        component.ngOnInit();

        expect(component.cartStateSummary.drink.tickets.water.total).toEqual(2);
        expect(component.cartStateSummary.food.tickets.hamburguer.total).toEqual(3);
    });
});
