import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

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
export class ConfigPage extends RootPage implements OnInit, OnDestroy {
    public defaultPrinter: BluetoothDevice;
    public categoriesNumber$: Observable<number>;
    public ticketsNumber$: Observable<number>;
    public categoriesText: string;
    public ticketsText: string;

    private categoriesNumberSubs: Subscription;
    private ticketsNumberSubs: Subscription;

    constructor(
        alertCtrl: AlertController,
        platform: Platform,
        private translateService: TranslateService,
        private storageService: StorageService,
        private categoriesStore: Store<Category>,
    ) {
        super(alertCtrl, platform, translateService);
    }

    async ngOnInit() {
        const translations = this.translateService.instant([
            'CONFIG.CATEGORIES.CATEGORY',
            'CONFIG.CATEGORIES.CATEGORIES',
            'CONFIG.TICKETS.TICKET',
            'CONFIG.TICKETS.TICKETS',
        ]);

        this.categoriesNumber$ = this.categoriesStore.select(selectCategoriesCount);
        this.categoriesNumberSubs = this.categoriesNumber$.subscribe(
            (catNumber) =>
                (this.categoriesText = `${catNumber} ${
                    catNumber === 1 ? translations['CONFIG.CATEGORIES.CATEGORY'] : translations['CONFIG.CATEGORIES.CATEGORIES']
                }`),
        );

        this.ticketsNumber$ = this.categoriesStore.select(selectTicketsCount);
        this.ticketsNumberSubs = this.ticketsNumber$.subscribe(
            (ticketsNumber) =>
                (this.ticketsText = `${ticketsNumber} ${
                    ticketsNumber === 1 ? translations['CONFIG.TICKETS.TICKET'] : translations['CONFIG.TICKETS.TICKETS']
                }`),
        );

        this.defaultPrinter = await this.storageService.getObject(Keys.Printer);
    }

    ngOnDestroy() {
        this.categoriesNumberSubs.unsubscribe();
        this.ticketsNumberSubs.unsubscribe();
    }
}
