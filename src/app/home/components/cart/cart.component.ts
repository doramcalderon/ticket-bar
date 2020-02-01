import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    constructor(private modalCtrl: ModalController) {}

    ngOnInit() {}

    public dismiss() {
        this.modalCtrl.dismiss();
    }
}
