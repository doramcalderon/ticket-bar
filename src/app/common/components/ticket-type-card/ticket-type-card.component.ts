import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../../cart/store/cart.service';
import { Category, TicketType } from '../../model/category.model';

@Component({
    selector: 'tb-ticket-type-card',
    templateUrl: './ticket-type-card.component.html',
    styleUrls: ['./ticket-type-card.component.scss'],
})
export class TicketTypeCardComponent implements OnInit {
    @Input()
    public category: Category;

    @Input()
    public type: TicketType;

    /**
     * Tickets added to the cart.
     */
    @Input()
    public count: number;

    constructor(private cartService: CartService) {}

    ngOnInit() {}

    public addTicket(ticketsNumber: number) {
        this.cartService.addTicket({ type: this.type, category: this.category }, this.count + ticketsNumber);
    }

    public removeTicket(ticketsNumber: number) {
        const ticketsToRemove: number = this.count - ticketsNumber;

        if (ticketsToRemove <= 0) {
            this.clear();
        } else {
            this.cartService.addTicket({ type: this.type, category: this.category }, this.count - ticketsNumber);
        }
    }

    public clear() {
        this.cartService.removeTicket({ type: this.type, category: this.category });
    }
}
