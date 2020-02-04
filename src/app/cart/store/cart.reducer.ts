import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { Cart } from './cart.model';

export const cartFeatureKey = 'cart';

export interface CartState {
    cart: Cart;
}

export const initialState: CartState = {
    cart: { tickets: [] },
};

const cartReducer = createReducer(
    initialState,

    on(CartActions.loadCart, state => state),
    on(CartActions.loadCartSuccess, (state, action) => state),
    on(CartActions.loadCartFailure, (state, action) => state),
    on(CartActions.addTicket, (state, action) => {
        return {
            cart: {
                tickets: state.cart.tickets.concat(action.ticket),
            },
        };
    }),
);

export function reducer(state: CartState | undefined, action: Action) {
    return cartReducer(state, action);
}
