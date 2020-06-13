import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Category } from 'src/app/common/model/category.model';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { CategoriesEffects } from './categories.effects';

describe('CategoriesEffects', () => {
    let actions$: Observable<any>;
    let effects: CategoriesEffects;

    const errorHandlerStub = {
        handleError: (error) => {},
    };

    const modalCtrlStub = {
        create: (opts: any) => Promise.resolve({}),
    };

    const categoriesServiceStub = {
        addCategory: (category: Category) => Promise.resolve([category]),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CategoriesEffects,
                provideMockActions(() => actions$),
                { provide: ErrorHandler, useValue: errorHandlerStub },
                { provide: ModalController, useValue: modalCtrlStub },
                { provide: CategoriesService, useValue: categoriesServiceStub },
            ],
        });

        effects = TestBed.get<CategoriesEffects>(CategoriesEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
