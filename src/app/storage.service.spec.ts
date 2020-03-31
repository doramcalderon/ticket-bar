import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage';

describe('StorageService', () => {
    const storageStub = {
        set: (key: string, value: any) => Promise.resolve(),
        get: (key: string) => Promise.resolve(),
        remove: (key: string) => Promise.resolve(),
        clear: () => Promise.resolve(),
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: Storage, useValue: storageStub }],
        }),
    );

    it('should be created', () => {
        const service: StorageService = TestBed.get(StorageService);
        expect(service).toBeTruthy();
    });
});
