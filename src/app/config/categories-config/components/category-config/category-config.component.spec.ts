import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { Category } from 'src/app/common/model/category.model';
import { CategoryConfigComponent } from './category-config.component';
import { TranslateServiceMock, TranslateMockDirective, TranslatePipeMock } from 'src/mocks';

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
        select: (selector: any, category: Category) => of([]),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryConfigComponent, TranslateMockDirective, TranslatePipeMock],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot()],
            providers: [
                { provide: AlertController, useValue: alertCtrlStub },
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: TranslateService, useValue: TranslateServiceMock },
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
