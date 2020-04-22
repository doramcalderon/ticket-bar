import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { StorageService } from 'src/app/storage.service';

describe('CategoriesService', () => {
    const storageServiceStub = {
        getObject: (key: string) => Promise.resolve({}),
        setObject: (key: string, object: any) => Promise.resolve(true),
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: StorageService, useValue: storageServiceStub }],
        }),
    );

    it('should be created', () => {
        const service: CategoriesService = TestBed.get(CategoriesService);
        expect(service).toBeTruthy();
    });
});
