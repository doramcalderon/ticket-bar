import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../../store/cart.service';
import { Observable } from 'rxjs';
import { TicketType } from '../../../common/model/category.model';

@Component({
    selector: 'tb-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    public cartTickets$: Observable<TicketType[]>;
    constructor(private modalCtrl: ModalController, private cartService: CartService) {}

    ngOnInit() {
        this.cartTickets$ = this.cartService.getSelectCartTickets();
    }

    public dismiss() {
        this.modalCtrl.dismiss();
    }
}
