import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tb-ticket-units-selector',
    templateUrl: './ticket-units-selector.component.html',
    styleUrls: ['./ticket-units-selector.component.scss'],
})
export class TicketUnitsSelectorComponent implements OnInit {
    @Output()
    public add: EventEmitter<number> = new EventEmitter();

    @Output()
    public remove: EventEmitter<number> = new EventEmitter();

    public units: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /**
     * Tickets to add.
     */
    public ticketsNumber = 1;

    constructor() {}

    ngOnInit() {}

    public addTicket() {
        this.add.emit(this.ticketsNumber);
    }

    public removeTicket() {
        this.remove.emit(this.ticketsNumber);
    }
}
