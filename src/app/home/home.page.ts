import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartComponent } from './components/cart/cart.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public total = 0;

    constructor(public modalController: ModalController) {}

    async openCart() {
        const modal = await this.modalController.create({
            component: CartComponent,
        });
        return await modal.present();
    }
}
