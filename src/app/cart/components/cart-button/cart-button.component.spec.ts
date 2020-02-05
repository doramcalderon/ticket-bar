import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { CartButtonComponent } from './cart-button.component';
import { Observable, of } from 'rxjs';
import { CartService } from '../../store/cart.service';

describe('CartButtonComponent', () => {
    let component: CartButtonComponent;
    let fixture: ComponentFixture<CartButtonComponent>;

    const modalCtrlStub = {
        present: (): Promise<void> => Promise.resolve(),
    };
    const cartServiceStub = {
        getTotal: (): Observable<number> => of(0),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartButtonComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: CartService, useValue: cartServiceStub },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
