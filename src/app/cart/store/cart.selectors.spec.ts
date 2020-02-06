import { Ticket } from './cart.model';
import * as fromCart from './cart.reducer';
import { selectCartState, selectCartTickets, selectCartTotal } from './cart.selectors';

describe('Cart Selectors', () => {
    it('should select the feature state', () => {
        const result = selectCartState({
            [fromCart.cartFeatureKey]: {},
        });
        expect(result).toEqual({} as fromCart.CartState);
    });

    it('should select the cart tickets', () => {
        const tickets: Ticket[] = selectCartTickets({ cart: { cart: { tickets: [] } } });
        expect(tickets).toEqual([]);
    });

    it('should select the cart tickets length when there is not tickets in the cart', () => {
        const total: number = selectCartTotal({ cart: { cart: { tickets: [] } } });
        expect(total).toEqual(0);
    });

    it('should select the cart tickets length when there is tickets in the cart', () => {
        const total: number = selectCartTotal({ cart: { cart: { tickets: [{ name: 'foo', price: 3 }] } } });
        expect(total).toEqual(1);
    });
});
