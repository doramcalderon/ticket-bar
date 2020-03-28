import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { Observable, of } from 'rxjs';

import { CartState } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';
import { CartPreviewComponent } from './cart-preview.component';
import { PrinterService } from './printer.service';

describe('CartPreviewComponent', () => {
    let component: CartPreviewComponent;
    let fixture: ComponentFixture<CartPreviewComponent>;

    const cartServiceStub = {
        getCart: (): Observable<CartState> => of({ ticketsCount: 0 }),
    };
    const modalControllerStub = {
        create: (options: any) => Promise.resolve(),
        present: () => Promise.resolve(),
        onDidDismiss: () => Promise.resolve(),
    };
    const printerServiceStub = {
        connectAndPrint: (printer: any, base64Img: string) => Promise.resolve(),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartPreviewComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: CartService, useValue: cartServiceStub },
                { provide: PrinterService, useValue: printerServiceStub },
                { provide: ModalController, useValue: modalControllerStub },
            ],
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
