import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { Keys } from '../../../storage.model';
import { StorageService } from '../../../storage.service';
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

    constructor(
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private printerService: BTPrinterService,
        private storageService: StorageService,
    ) {}

    ngOnInit() {
        this.printerService
            .listDevices()
            .then(data => {
                this.devices = data;
            })
            .catch(error => (this.devices = null));
    }

    public async selectDevice(device: BluetoothDevice): Promise<void> {
        const defaultDevice = await this.storageService.getObject(Keys.Printer);

        if (!defaultDevice) {
            this.showSaveAsDefaultAlert(device);
        }
        this.modalCtrl.dismiss(device);
    }

    private async showSaveAsDefaultAlert(device: BluetoothDevice): Promise<void> {
        const alert = await this.alertCtrl.create({
            header: 'Guardar como favorito',
            message: '¿Quieres usar este dispositivo por defecto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: 'OK',
                    handler: () => this.storageService.setObject(Keys.Printer, device),
                },
            ],
        });

        await alert.present();
    }
}
