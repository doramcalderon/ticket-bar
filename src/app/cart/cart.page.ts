import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController, NavController, Platform } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { Ticket } from './store/cart.model';
import { CategorySummary } from './store/cart.reducer';
import { CartService } from './store/cart.service';

@Component({
    selector: 'tb-cart-page',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
    public cartStateSummary: { [category: string]: CategorySummary } = {};
    public cartTotal$: Observable<number>;
    public bill$: Observable<number>;
    public totalParam: any;
    public units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    public isAndroid;

    private billSubscription: Subscription;

    @ViewChild('preview', { static: true }) preview: CartPreviewComponent;

    constructor(
        private cartService: CartService,
        private alertCtl: AlertController,
        private platform: Platform,
        private navCtrl: NavController,
        private translate: TranslateService,
        private bluetoothSerial: BluetoothSerial,
    ) {}

    ngOnInit() {
        this.isAndroid = this.platform.is('android');
        this.cartService.getCart().subscribe({
            next: (cartState) => {
                this.cartStateSummary = cartState.summary;
            },
        });
        this.cartTotal$ = this.cartService.getTotal();
        this.bill$ = this.cartService.getBill();
        this.billSubscription = this.bill$.subscribe((bill) => (this.totalParam = { total: bill }));
    }

    ngOnDestroy() {
        this.billSubscription.unsubscribe();
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
        const translatations = this.translate.instant(['CART.EMPTY.TITLE', 'CART.EMPTY.MESSAGE', 'COMMON.CANCEL', 'COMMON.OK']);
        const alert = await this.alertCtl.create({
            header: translatations['CART.EMPTY.TITLE'],
            message: translatations['CART.EMPTY.MESSAGE'],
            buttons: [
                {
                    text: translatations['COMMON.CANCEL'],
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: translatations['COMMON.OK'],
                    handler: () => this.cartService.emptyCart(),
                },
            ],
        });

        await alert.present();
    }

    public async bluetoothPrinting(): Promise<void> {
        try {
            await this.bluetoothSerial.isEnabled();
            this.preview.print();
        } catch (error) {
            // the plugin throws an error when the BT is disabled
            try {
                await this.bluetoothSerial.enable();
                this.preview.print();
            } catch (error) {
                // the plugin throws an error when the user does not enable the BT
                console.warn('The Bluetooth have not been enabled');
            }
        }
    }

    public async printFinished(): Promise<void> {
        const translatations = this.translate.instant(['CART.EMPTY.TITLE', 'CART.PRINT_FINISHED.MESSAGE', 'COMMON.CANCEL', 'COMMON.OK']);
        const alert = await this.alertCtl.create({
            header: translatations['CART.EMPTY.TITLE'],
            message: translatations['CART.PRINT_FINISHED.MESSAGE'],
            buttons: [
                {
                    text: translatations['COMMON.CANCEL'],
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: translatations['COMMON.OK'],
                    handler: () => {
                        this.empty();
                        this.navCtrl.back();
                    },
                },
            ],
        });

        await alert.present();
    }
}
