import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

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
        private translate: TranslateService,
        private printerService: BTPrinterService,
        private storageService: StorageService,
    ) {}

    ngOnInit() {
        this.printerService
            .listDevices()
            .then((data) => {
                this.devices = data;
            })
            .catch((error) => (this.devices = null));
    }

    public async selectDevice(device: BluetoothDevice): Promise<void> {
        const defaultDevice = await this.storageService.getObject(Keys.Printer);

        if (!defaultDevice) {
            this.showSaveAsDefaultAlert(device);
        }
        this.modalCtrl.dismiss(device);
    }

    private async showSaveAsDefaultAlert(device: BluetoothDevice): Promise<void> {
        const translations = this.translate.instant([
            'DEVICES_LIST.FAVOURITE_ALERT.TITLE',
            'DEVICES_LIST.FAVOURITE_ALERT.MESSAGE',
            'COMMON.CANCEL',
            'COMMON.OK',
        ]);
        const alert = await this.alertCtrl.create({
            header: translations['DEVICES_LIST.FAVOURITE_ALERT.TITLE'],
            message: translations['DEVICES_LIST.FAVOURITE_ALERT.MESSAGE'],
            buttons: [
                {
                    text: translations['COMMON.CANCEL'],
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: translations['COMMON.OK'],
                    handler: () => this.storageService.setObject(Keys.Printer, device),
                },
            ],
        });

        await alert.present();
    }
}
