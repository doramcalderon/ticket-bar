import { reducer, initialState, CartState } from './cart.reducer';
import * as CartActions from './cart.actions';

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
            const state: CartState = { cart: { tickets: [] } };
            const addTicketAction = CartActions.addTicket({ ticket: { name: 'foo', price: 4 } });
            const newState: CartState = reducer(state, addTicketAction);

            expect(newState).toEqual({ cart: { tickets: [{ name: 'foo', price: 4 }] } });
        });
    });
});
