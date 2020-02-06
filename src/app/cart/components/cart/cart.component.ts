import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { Ticket } from '../../store/cart.model';
import { CartService } from '../../store/cart.service';

@Component({
    selector: 'tb-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    public cartTickets$: Observable<Ticket[]>;
    constructor(private modalCtrl: ModalController, private cartService: CartService) {}

    ngOnInit() {
        this.cartTickets$ = this.cartService.getSelectCartTickets();
    }

    public dismiss() {
        this.modalCtrl.dismiss();
    }
}
