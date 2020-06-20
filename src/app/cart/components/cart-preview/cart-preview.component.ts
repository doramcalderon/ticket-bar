import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import domToImage from 'dom-to-image';

import { Keys } from '../../../storage.model';
import { StorageService } from '../../../storage.service';
import { Ticket } from '../../store/cart.model';
import { CartState, CategorySummary, TicketSummary } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';
import { DevicesListComponent } from '../devices-list/devices-list.component';
import { BTPrinterService } from './btprinter.service';
import { BluetoothDevice } from './cart-preview.model';

@Component({
    selector: 'tb-cart-preview',
    templateUrl: './cart-preview.component.html',
    styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent implements OnInit {
    @Input()
    public cartStateSummary: { [category: string]: CategorySummary } = {};
    @Output()
    public printFinished: EventEmitter<void> = new EventEmitter();

    @ViewChild('printSection', { static: true }) printSectionElref: ElementRef;

    public tickets: Ticket[];

    constructor(
        private alertCtrl: AlertController,
        private modalCtl: ModalController,
        private translate: TranslateService,
        private cartService: CartService,
        private printerService: BTPrinterService,
        private storageService: StorageService,
    ) {}

    ngOnInit() {
        this.cartService.getCart().subscribe((state) => (this.tickets = this.getTicketsArray(state)));
    }

    public async print(): Promise<void> {
        let printer: BluetoothDevice = await this.storageService.getObject(Keys.Printer);

        if (!printer) {
            printer = (await this.selectPrinter()).data;
        }

        try {
            await this.connectAndPrint(printer);
            await this.printFinished.emit();
        } catch (error) {
            const translations = this.translate.instant(['PRINT.ERROR.TITLE', 'PRINT.ERROR.MESSAGE']);
            const alert = await this.alertCtrl.create({
                header: translations['PRINT.ERROR.TITLE'],
                message: translations['PRINT.ERROR.MESSAGE'],
                buttons: ['OK'],
            });
            await alert.present();
        }
    }

    /**
     * Show the available bluetooth devices and returns the selected one.
     */
    private async selectPrinter(): Promise<any> {
        const modal = await this.modalCtl.create({
            component: DevicesListComponent,
        });

        await modal.present();
        return modal.onDidDismiss();
    }

    private async connectAndPrint(printer: any): Promise<any> {
        if (!!printer) {
            const cartPreviewNode: HTMLElement = this.printSectionElref.nativeElement;
            const base64Img = await domToImage.toPng(cartPreviewNode, { style: { position: 'relative', left: '0px', top: '0px' } });

            return this.printerService.connectAndPrint(printer, base64Img);
        } else {
            return Promise.reject('No printer selected');
        }
    }

    private getTicketsArray(state: CartState): Ticket[] {
        const cartStateSummary = state.summary;
        return !!cartStateSummary
            ? Object.values(cartStateSummary).reduce(
                  (ticketsArray, current) => ticketsArray.concat(this.getTicketsToPrint(current.tickets)),
                  [],
              )
            : [];
    }

    private getTicketsToPrint(ticketSummary: TicketSummary): Ticket[] {
        return Object.values(ticketSummary).reduce((ticketsArray, current) => {
            const tickets: Array<Ticket> = new Array(current.units).fill(current.ticket);
            return ticketsArray.concat(tickets);
        }, []);
    }
}
