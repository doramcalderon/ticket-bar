import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Ticket } from '../../store/cart.model';
import { CategorySummary } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';

@Component({
    selector: 'tb-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    public cartStateSummary: { [category: string]: CategorySummary } = {};

    constructor(private modalCtrl: ModalController, private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getCart().subscribe({
            next: cartState => {
                this.cartStateSummary = cartState.summary;
            },
        });
    }

    public dismiss() {
        this.modalCtrl.dismiss();
    }

    public unitsChange(event: CustomEvent, ticket: Ticket): void {
        this.cartService.addTicket(ticket, +event.detail.value);
    }

    public deleteTicket(ticket: Ticket): void {
        this.cartService.removeTicket(ticket);
    }
}
