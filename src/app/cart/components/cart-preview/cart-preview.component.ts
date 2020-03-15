import { Component, Input, OnInit } from '@angular/core';

import { Ticket } from '../../store/cart.model';
import { CartState, CategorySummary, TicketSummary } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';

@Component({
    selector: 'tb-cart-preview',
    templateUrl: './cart-preview.component.html',
    styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent implements OnInit {
    @Input()
    public cartStateSummary: { [category: string]: CategorySummary } = {};

    public tickets: Ticket[];

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getCart().subscribe(state => (this.tickets = this.getTicketsArray(state)));
    }

    private getTicketsArray(state: CartState): Ticket[] {
        const cartStateSummary = state.summary;
        return !!cartStateSummary
            ? Object.values(cartStateSummary).reduce(
                  (ticketsArray, current) => ticketsArray.concat(this.getTicketsToPrint(current.tickets)),
                  [],
              )
            : [];
    }

    private getTicketsToPrint(ticketSummary: TicketSummary): Ticket[] {
        return Object.values(ticketSummary).reduce((ticketsArray, current) => {
            const tickets: Array<Ticket> = new Array(current.units).fill(current.ticket);
            return ticketsArray.concat(tickets);
        }, []);
    }
}
