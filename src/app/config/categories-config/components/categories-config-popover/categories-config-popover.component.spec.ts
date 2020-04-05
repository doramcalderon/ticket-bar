import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController, PopoverController } from '@ionic/angular';

import { CategoriesConfigPopoverComponent } from './categories-config-popover.component';

describe('CategoriesConfigPopoverComponent', () => {
    let component: CategoriesConfigPopoverComponent;
    let fixture: ComponentFixture<CategoriesConfigPopoverComponent>;

    const modalCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const popoverCtrlStub = {
        dismiss: () => Promise.resolve(true),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesConfigPopoverComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot()],
            providers: [
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: PopoverController, useValue: popoverCtrlStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoriesConfigPopoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
