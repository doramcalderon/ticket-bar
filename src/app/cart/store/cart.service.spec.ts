import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';

import { CartService } from './cart.service';

describe('CartService', () => {
    const cartStoreStub = {
        select: () => of({}),
        dispatch: (action: any): void => {},
    };

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: Store, useValue: cartStoreStub }],
        }),
    );

    it('should be created', () => {
        const service: CartService = TestBed.get(CartService);
        expect(service).toBeTruthy();
    });
});
