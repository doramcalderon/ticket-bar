import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { CartService } from '../../store/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
    selector: 'tb-cart-button',
    templateUrl: './cart-button.component.html',
    styleUrls: ['./cart-button.component.css'],
})
export class CartButtonComponent implements OnInit {
    public total$: Observable<number>;

    constructor(private modalController: ModalController, private cartService: CartService) {}

    ngOnInit() {
        this.total$ = this.cartService.getTotal();
    }

    async openCart() {
        const modal = await this.modalController.create({
            component: CartComponent,
        });
        return await modal.present();
    }
}
