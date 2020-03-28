import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

import { Observable } from 'rxjs';

import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { Ticket } from './store/cart.model';
import { CategorySummary } from './store/cart.reducer';
import { CartService } from './store/cart.service';

@Component({
    selector: 'tb-cart-page',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    public cartStateSummary: { [category: string]: CategorySummary } = {};
    public cartTotal$: Observable<number>;
    public bill$: Observable<number>;
    public units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public isAndroid;

    @ViewChild('preview', { static: true }) preview: CartPreviewComponent;

    constructor(private cartService: CartService, private alertCtl: AlertController, private platform: Platform) {}

    ngOnInit() {
        this.isAndroid = this.platform.is('android');
        this.cartService.getCart().subscribe({
            next: cartState => {
                this.cartStateSummary = cartState.summary;
            },
        });
        this.cartTotal$ = this.cartService.getTotal();
        this.bill$ = this.cartService.getBill();
    }

    public unitsChange(event: CustomEvent, ticket: Ticket): void {
        this.cartService.addTicket(ticket, +event.detail.value);
    }

    public deleteTicket(ticket: Ticket): void {
        this.cartService.removeTicket(ticket);
    }

    public empty(): void {
        this.cartService.emptyCart();
    }

    public async confirmEmptyCart(): Promise<void> {
        const alert = await this.alertCtl.create({
            header: 'Vaciar carro',
            message: '¿Estás seguro de que quieres vaciar el carro?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: blah => {},
                },
                {
                    text: 'OK',
                    handler: () => this.cartService.emptyCart(),
                },
            ],
        });

        await alert.present();
    }

    public async print(): Promise<void> {
        this.preview.print();
    }
}
