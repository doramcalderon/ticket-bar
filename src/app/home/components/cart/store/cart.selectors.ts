import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(fromCart.cartFeatureKey);
export const selectCartTickets = createSelector(selectCartState, (state: fromCart.CartState) => state.cart.tickets);
