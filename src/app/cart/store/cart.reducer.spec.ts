import * as CartActions from './cart.actions';
import { Ticket } from './cart.model';
import { CartState, initialState, reducer } from './cart.reducer';

describe('Cart Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    describe('`[Cart] Add Ticket action`', () => {
        it('should return the state with the ticket selected added', () => {
            const state: CartState = { ticketsCount: 0 };
            const expectedState: CartState = {
                ticketsCount: 1,
                summary: {
                    bar: {
                        category: { id: 'foo', name: 'bar' },
                        tickets: {
                            foo: {
                                ticket: { type: { name: 'foo', price: 4 }, category: { id: 'foo', name: 'bar' } },
                                units: 1,
                                total: 4,
                            },
                        },
                    },
                },
            };
            const ticket: Ticket = {
                type: { name: 'foo', price: 4 },
                category: { id: 'foo', name: 'bar' },
            };
            const addTicketAction = CartActions.addTicket({
                ticket,
            });
            const newState: CartState = reducer(state, addTicketAction);

            expect(newState).toEqual(expectedState);
        });
    });

    describe('`[Cart] Empty cart action`', () => {
        it('should return the initial state when the cart is empty', () => {
            const state: CartState = {
                ticketsCount: 1,
                summary: {
                    bar: {
                        category: { id: 'foo', name: 'bar' },
                        tickets: {
                            foo: {
                                ticket: { type: { name: 'foo', price: 4 }, category: { id: 'foo', name: 'bar' } },
                                units: 1,
                                total: 4,
                            },
                        },
                    },
                },
            };
            const expectedState: CartState = { ticketsCount: 0 };

            const emptyCartAction = CartActions.emptyCart();
            const newState: CartState = reducer(state, emptyCartAction);

            expect(newState).toEqual(expectedState);
        });
    });
});
