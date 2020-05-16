import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertController, IonicModule, ModalController, PopoverController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { CategoriesService } from '../../common/services/categories.service';
import { StorageService } from '../../storage.service';
import { CategoriesConfigPage } from './categories-config.page';

describe('CategoriesConfigPage', () => {
    let component: CategoriesConfigPage;
    let fixture: ComponentFixture<CategoriesConfigPage>;

    const categoriesServiceStub = {
        removeCategory: (id: string) => Promise.resolve(),
    };

    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
    };

    const alertCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const popoverCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const modalCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const storeStub = {
        select: (selector: any) => of([]),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesConfigPage],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
            providers: [
                { provide: CategoriesService, useValue: categoriesServiceStub },
                { provide: StorageService, useValue: storageServiceStub },
                { provide: AlertController, useValue: alertCtrlStub },
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: PopoverController, useValue: popoverCtrlStub },
                { provide: Store, useValue: storeStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CategoriesConfigPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
