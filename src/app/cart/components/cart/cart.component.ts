import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
}
