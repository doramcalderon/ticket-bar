import * as fromCart from './cart.reducer';
import { selectCartState, selectCartTotal } from './cart.selectors';

describe('Cart Selectors', () => {
    const emptyCartState: fromCart.CartState = { ticketsCount: 0 };
    const cartState: fromCart.CartState = {
        ticketsCount: 1,
        summary: {
            foo: {
                category: { id: 'foo', name: 'bar' },
                tickets: {
                    foo: {
                        ticket: { category: { id: 'foo', name: 'bar' }, type: { name: 'foo', price: 4 } },
                        units: 1,
                        total: 4,
                    },
                },
            },
        },
    };
    it('should select the feature state', () => {
        const result = selectCartState({
            [fromCart.cartFeatureKey]: {},
        });
        expect(result).toEqual({} as fromCart.CartState);
    });

    it('should select the cart tickets length when there is not tickets in the cart', () => {
        const total: number = selectCartTotal.projector(emptyCartState);
        expect(total).toEqual(0);
    });

    it('should select the cart tickets length when there is tickets in the cart', () => {
        const total: number = selectCartTotal.projector(cartState);
        expect(total).toEqual(1);
    });
});
