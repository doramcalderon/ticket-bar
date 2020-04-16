import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { StorageService } from '../../../../storage.service';
import { NewCategoryComponent } from './new-category.component';

describe('NewCategoryComponent', () => {
    let component: NewCategoryComponent;
    let fixture: ComponentFixture<NewCategoryComponent>;

    const modalCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
        dismiss: () => Promise.resolve(),
    };

    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
        setObject: (key: string, obj: any) => Promise.resolve(true),
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewCategoryComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [IonicModule.forRoot()],
            providers: [
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: StorageService, useValue: storageServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(NewCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
