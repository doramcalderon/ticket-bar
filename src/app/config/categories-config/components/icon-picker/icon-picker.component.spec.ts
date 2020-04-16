import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { IconPickerComponent } from './icon-picker.component';

describe('IconPickerComponent', () => {
    let component: IconPickerComponent;
    let fixture: ComponentFixture<IconPickerComponent>;

    const modalCtrlStub = {
        dismiss: (data?: any, role?: string, id?: string) => Promise.resolve('someicon'),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IconPickerComponent],
            providers: [{ provide: ModalController, useValue: modalCtrlStub }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
