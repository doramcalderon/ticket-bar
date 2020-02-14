import { Component, OnInit, Input } from '@angular/core';

import { TicketType, Category } from '../../../common/model/category.model';
import { CartService } from '../../../cart/store/cart.service';

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

    @Input()
    public count: number;

    constructor(private cartService: CartService) {}

    ngOnInit() {}

    public addTicket(type: TicketType) {
        this.cartService.addTicket({ type, category: this.category });
    }
}
