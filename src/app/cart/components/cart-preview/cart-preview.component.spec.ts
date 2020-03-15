import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { CartState } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';
import { CartPreviewComponent } from './cart-preview.component';

describe('CartPreviewComponent', () => {
    let component: CartPreviewComponent;
    let fixture: ComponentFixture<CartPreviewComponent>;

    const cartServiceStub = {
        getCart: (): Observable<CartState> => of({ ticketsCount: 0 }),
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartPreviewComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: CartService, useValue: cartServiceStub }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartPreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
