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
            const state: CartState = { cart: { tickets: [] } };
            const ticket: Ticket = {
                type: { name: 'foo', price: 4 },
                category: { id: 'foo', name: 'bar' },
            };
            const addTicketAction = CartActions.addTicket({
                ticket,
            });
            const newState: CartState = reducer(state, addTicketAction);

            expect(newState).toEqual({ cart: { tickets: [ticket] } });
        });
    });
});
