import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as CartActions from './cart.actions';
import { Cart, Ticket } from './cart.model';
import * as CartSelectors from './cart.selectors';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private store: Store<Cart>) {}

    public loadCart() {
        this.store.dispatch(CartActions.loadCart());
    }

    public addTicket(ticket: Ticket) {
        this.store.dispatch(CartActions.addTicket({ ticket }));
    }

    public getSelectCartTickets(): Observable<Ticket[]> {
        return this.store.select(CartSelectors.selectCartTickets);
    }

    public getTotal(): Observable<number> {
        return this.store.select(CartSelectors.selectCartTotal);
    }
}
