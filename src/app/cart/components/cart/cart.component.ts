import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

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
    public cartTotal$: Observable<number>;
    public bill$: Observable<number>;
    public units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(private modalCtrl: ModalController, private cartService: CartService) {}

    ngOnInit() {
        this.cartService.getCart().subscribe({
            next: cartState => {
                this.cartStateSummary = cartState.summary;
            },
        });
        this.cartTotal$ = this.cartService.getTotal();
        this.bill$ = this.cartService.getBill();
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
