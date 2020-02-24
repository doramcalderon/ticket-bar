import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(fromCart.cartFeatureKey);
export const selectCartTotal = createSelector(selectCartState, (state: fromCart.CartState) => (!!state ? state.ticketsCount : 0));
export const selectTicketsTypeCount = createSelector(selectCartState, (state: fromCart.CartState, ticketType: string) =>
    !!state && !!state.summary
        ? Object.keys(state.summary).reduce(
              (acc: number, categoryName) => acc + countTicketsByType(ticketType, state.summary[categoryName].tickets),
              0,
          )
        : 0,
);
export const selectBill = createSelector(selectCartState, (state: fromCart.CartState) => {
    const ticketsSumm: fromCart.TicketSummary[] = Object.values(state.summary).map(catSummary => catSummary.tickets);
    const categoryTotal = (ts: fromCart.TicketSummary) =>
        Object.values(ts).reduce((acc: number, current: any): number => acc + current.total, 0);
    return ticketsSumm.reduce((acc, current) => acc + categoryTotal(current), 0);
});

const countTicketsByType = (ticketType: string, ticketSummary: fromCart.TicketSummary): number => {
    return !!ticketSummary
        ? Object.keys(ticketSummary)
              .filter(tt => tt === ticketType)
              .reduce((count, tt) => ticketSummary[tt].units + count, 0)
        : 0;
};
