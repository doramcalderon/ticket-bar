import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { BTPrinterService } from '../cart-preview/btprinter.service';
import { BluetoothDevice } from '../cart-preview/cart-preview.model';

@Component({
    selector: 'app-devices-list',
    templateUrl: './devices-list.component.html',
    styleUrls: ['./devices-list.component.scss'],
})
export class DevicesListComponent implements OnInit {
    @Input()
    devices: BluetoothDevice[];

    constructor(private modalCtrl: ModalController, private printerService: BTPrinterService) {}

    ngOnInit() {
        this.printerService
            .listDevices()
            .then(data => {
                this.devices = data;
            })
            .catch(error => (this.devices = null));
    }

    public selectDevice(device: BluetoothDevice): void {
        this.modalCtrl.dismiss(device);
    }
}
