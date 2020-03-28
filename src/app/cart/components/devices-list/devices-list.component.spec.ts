import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { PrinterService } from '../cart-preview/printer.service';
import { DevicesListComponent } from './devices-list.component';

describe('DevicesListComponent', () => {
    let component: DevicesListComponent;
    let fixture: ComponentFixture<DevicesListComponent>;

    const modalControllerStub = {
        dismiss: (data?: any, role?: string, id?: string) => Promise.resolve(true),
    };

    const printServiceStub = {
        listDevices: () => [],
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DevicesListComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ModalController, useValue: modalControllerStub },
                { provide: PrinterService, useValue: printServiceStub },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevicesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
