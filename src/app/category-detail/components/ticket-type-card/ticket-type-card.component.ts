import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/store/cart.service';
import { Category, TicketType } from '../../../common/model/category.model';

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

    public units: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
     * Tickets to add.
     */
    public ticketsNumber = 1;

    constructor(private cartService: CartService) {}

    ngOnInit() {}

    public addTicket() {
        if (!this.ticketsNumber) {
            this.ticketsNumber = 1;
        }
        this.cartService.addTicket({ type: this.type, category: this.category }, this.count + this.ticketsNumber);
    }

    public removeTicket() {
        if (!this.ticketsNumber) {
            this.ticketsNumber = 1;
        }
        const ticketsToRemove: number = this.count - this.ticketsNumber;

        if (ticketsToRemove <= 0) {
            this.clear();
        } else {
            this.cartService.addTicket({ type: this.type, category: this.category }, this.count - this.ticketsNumber);
        }
    }

    public clear() {
        this.cartService.removeTicket({ type: this.type, category: this.category });
    }
}
