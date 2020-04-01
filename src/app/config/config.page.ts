import { Component, OnInit } from '@angular/core';

import { BluetoothDevice } from '../cart/components/cart-preview/cart-preview.model';
import { Keys } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'tb-config',
    templateUrl: 'config.page.html',
    styleUrls: ['config.page.scss'],
})
export class ConfigPage implements OnInit {
    public defaultPrinter: BluetoothDevice;

    constructor(private storageService: StorageService) {}

    async ngOnInit() {
        this.defaultPrinter = await this.storageService.getObject(Keys.Printer);
    }
}
