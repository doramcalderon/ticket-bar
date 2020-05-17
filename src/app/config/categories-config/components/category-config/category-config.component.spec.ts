import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController, AlertController } from '@ionic/angular';

import { Store } from '@ngrx/store';

import { CategoryConfigComponent } from './category-config.component';

describe('CategoryConfigComponent', () => {
    let component: CategoryConfigComponent;
    let fixture: ComponentFixture<CategoryConfigComponent>;

    const alertCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const modalCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
        dismiss: () => Promise.resolve(),
    };

    const storeStub = {
        dispatch: (action: any) => {},
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryConfigComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot()],
            providers: [
                { provide: AlertController, useValue: alertCtrlStub },
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: Store, useValue: storeStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoryConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
