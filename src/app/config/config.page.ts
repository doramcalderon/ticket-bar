import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BluetoothDevice } from '../cart/components/cart-preview/cart-preview.model';
import { Category } from '../common/model/category.model';
import { RootPage } from '../common/root-page';
import { Keys } from '../storage.model';
import { StorageService } from '../storage.service';
import { selectCategoriesCount, selectTicketsCount } from './categories-config/store/categories.selectors';

@Component({
    selector: 'tb-config',
    templateUrl: 'config.page.html',
    styleUrls: ['config.page.scss'],
})
export class ConfigPage extends RootPage implements OnInit {
    public defaultPrinter: BluetoothDevice;
    public categoriesNumber$: Observable<number>;
    public ticketsNumber$: Observable<number>;

    constructor(
        alertCtrl: AlertController,
        platform: Platform,
        private storageService: StorageService,
        private categoriesStore: Store<Category>,
    ) {
        super(alertCtrl, platform);
    }

    async ngOnInit() {
        this.categoriesNumber$ = this.categoriesStore.select(selectCategoriesCount);
        this.ticketsNumber$ = this.categoriesStore.select(selectTicketsCount);
        this.defaultPrinter = await this.storageService.getObject(Keys.Printer);
    }
}
