import { Component, OnInit, Input } from '@angular/core';

import { Ticket } from '../../store/cart.model';

@Component({
    selector: 'tb-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
    @Input() ticket: Ticket;

    constructor() {}

    ngOnInit() {}
}
