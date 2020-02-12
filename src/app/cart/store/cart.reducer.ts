import { Action, createReducer, on } from '@ngrx/store';

import { Category } from '../../common/model/category.model';
import * as CartActions from './cart.actions';
import { Ticket } from './cart.model';

export const cartFeatureKey = 'cart';

export interface TicketSummary {
    [type: string]: { ticket: Ticket; units?: number; total?: number };
}
export interface CategorySummary {
    category?: Category;
    tickets?: TicketSummary;
}

export interface CartState {
    summary?: { [category: string]: CategorySummary };
    ticketsCount?: number;
}

export const initialState: CartState = {
    ticketsCount: 0,
};

const cartReducer = createReducer(
    initialState,

    on(CartActions.loadCart, state => state),
    on(CartActions.loadCartSuccess, (state, action) => state),
    on(CartActions.loadCartFailure, (state, action) => state),
    on(CartActions.addTicket, (state: CartState, action) => addTicketToState(state, action.ticket, action.count)),
);

const addTicketToState = (state: CartState, ticket: Ticket, count?: number): CartState => {
    const category: Category = ticket.category;
    const categorySumm: CategorySummary = !!state.summary && state.summary[category.name] ? state.summary[category.name] : {};
    const ticketSumm: TicketSummary = !!state.summary && state.summary[category.name] ? state.summary[category.name].tickets : {};

    return {
        summary: {
            ...state.summary,
            [category.name]: {
                ...categorySumm,
                category,
                tickets: createOrUpdateTicketSummary(ticket, ticketSumm, count),
            },
        },
        ticketsCount: !!count ? count : state.ticketsCount + 1,
    };
};

/**
 * If the ticket type not already exists in the tickets summary, this is created.
 * Otherwise, the units and total are updated.
 */
const createOrUpdateTicketSummary = (ticket: Ticket, ticketsSumm: TicketSummary, count?: number): TicketSummary => {
    const ticketType: string = ticket.type.name;
    const ticketTypeFound: { ticket: Ticket; units?: number; total?: number } = ticketsSumm[ticketType];

    const units: number = !!count ? count : !!ticketTypeFound ? ticketTypeFound.units + 1 : 1;
    const total: number = ticket.type.price * units;
    return {
        ...ticketsSumm,
        [ticket.type.name]: {
            ticket,
            units,
            total,
        },
    };
};

export function reducer(state: CartState | undefined, action: Action) {
    return cartReducer(state, action);
}
