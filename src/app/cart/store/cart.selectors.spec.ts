import * as fromCart from './cart.reducer';
import { selectCartState, selectCartTotal, selectTicketsTypeCount, selectBill } from './cart.selectors';

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

    it('should count the tickets of a type', () => {
        const ticketTypeCount: number = selectTicketsTypeCount.projector(cartState, 'foo');
        expect(ticketTypeCount).toEqual(1);
    });

    it(`should return the price of the cart's content`, () => {
        const bill: number = selectBill.projector(cartState);
        expect(bill).toEqual(4);
    });

    it(`should return the price of the cart's content when there is tickets of different categories`, () => {
        const cartWithSeveralCategories = {
            ticketsCount: 2,
            summary: {
                ...cartState.summary,
                foo2: {
                    category: { id: 'foo2', name: 'bar2' },
                    tickets: {
                        foo: {
                            ticket: { category: { id: 'foo2', name: 'bar2' }, type: { name: 'foo-ticket', price: 3 } },
                            units: 2,
                            total: 6,
                        },
                    },
                },
            },
        };
        const bill: number = selectBill.projector(cartWithSeveralCategories);
        expect(bill).toEqual(10);
    });
});
