import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(fromCart.cartFeatureKey);
export const selectCartTotal = createSelector(selectCartState, (state: fromCart.CartState) => state.ticketsCount);
export const selectTicketsTypeCount = createSelector(selectCartState, (state: fromCart.CartState, ticketType: string) =>
    !!state.summary
        ? Object.keys(state.summary).reduce(
              (acc: number, categoryName) => acc + countTicketsByType(ticketType, state.summary[categoryName].tickets),
              0,
          )
        : 0,
);

const countTicketsByType = (ticketType: string, ticketSummary: fromCart.TicketSummary): number => {
    return !!ticketSummary
        ? Object.keys(ticketSummary)
              .filter(tt => tt === ticketType)
              .reduce((count, tt) => ticketSummary[tt].units + count, 0)
        : 0;
};
