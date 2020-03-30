import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import domToImage from 'dom-to-image';

import { Ticket } from '../../store/cart.model';
import { CartState, CategorySummary, TicketSummary } from '../../store/cart.reducer';
import { CartService } from '../../store/cart.service';
import { DevicesListComponent } from '../devices-list/devices-list.component';
import { BTPrinterService } from './btprinter.service';

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

    constructor(private cartService: CartService, private modalCtl: ModalController, private printerService: BTPrinterService) {}

    ngOnInit() {
        this.cartService.getCart().subscribe(state => (this.tickets = this.getTicketsArray(state)));
    }

    public print(): void {
        this.selectPrinter()
            .then(printer => this.connectAndPrint(printer))
            .then(result => this.printFinished.emit());
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
        if (!!printer.data) {
            const cartPreviewNode: HTMLElement = this.printSectionElref.nativeElement;
            const base64Img = await domToImage.toPng(cartPreviewNode, { style: { position: 'relative', left: '0px', top: '0px' } });

            return this.printerService.connectAndPrint(printer.data, base64Img);
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
