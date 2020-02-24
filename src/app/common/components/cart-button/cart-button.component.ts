import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../../cart/store/cart.service';

@Component({
    selector: 'tb-cart-button',
    templateUrl: './cart-button.component.html',
    styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent implements OnInit {
    public total$: Observable<number>;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.total$ = this.cartService.getTotal();
    }
}
