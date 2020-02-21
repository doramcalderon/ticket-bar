import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { TicketType } from '../../common/model/category.model';
import * as CartActions from './cart.actions';
import { Cart, Ticket } from './cart.model';
import { CartState } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private store: Store<Cart>) {}

    public loadCart() {
        this.store.dispatch(CartActions.loadCart());
    }

    public addTicket(ticket: Ticket, count?: number) {
        this.store.dispatch(CartActions.addTicket({ ticket, count }));
    }

    public removeTicket(ticket: Ticket): void {
        this.store.dispatch(CartActions.deleteTicket({ ticket }));
    }

    public getTotal(): Observable<number> {
        return this.store.select(CartSelectors.selectCartTotal);
    }

    public getTicketsTypeCount(ticketType: TicketType): Observable<number> {
        return this.store.select(CartSelectors.selectTicketsTypeCount, ticketType.name);
    }

    public getCart(): Observable<CartState> {
        return this.store.select(CartSelectors.selectCartState);
    }

    public getBill(): Observable<number> {
        return this.store.select(CartSelectors.selectBill);
    }
}
