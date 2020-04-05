import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, PopoverController } from '@ionic/angular';

import { StorageService } from '../../storage.service';
import { CategoriesConfigPage } from './categories-config.page';

describe('CategoriesConfigPage', () => {
    let component: CategoriesConfigPage;
    let fixture: ComponentFixture<CategoriesConfigPage>;

    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
    };

    const popoverCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesConfigPage],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([])],
            providers: [
                { provide: StorageService, useValue: storageServiceStub },
                { provide: PopoverController, useValue: popoverCtrlStub },
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
