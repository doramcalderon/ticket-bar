import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertController, ModalController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { TranslateServiceMock } from 'src/mocks';
import { StorageService } from '../../../storage.service';
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
    const alertControllerStub = {
        create: (options: any) => Promise.resolve({}),
        present: () => Promise.resolve(),
    };
    const printerServiceStub = {
        connectAndPrint: (printer: any, base64Img: string) => Promise.resolve(),
    };
    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartPreviewComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: CartService, useValue: cartServiceStub },
                { provide: PrinterService, useValue: printerServiceStub },
                { provide: StorageService, useValue: storageServiceStub },
                { provide: TranslateService, useClass: TranslateServiceMock },
                { provide: ModalController, useValue: modalControllerStub },
                { provide: AlertController, useValue: alertControllerStub },
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
