import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BluetoothDevice } from '../cart/components/cart-preview/cart-preview.model';
import { Category } from '../common/model/category.model';
import { Keys } from '../storage.model';
import { StorageService } from '../storage.service';
import { selectCategoriesCount } from './categories-config/store/categories.selectors';

@Component({
    selector: 'tb-config',
    templateUrl: 'config.page.html',
    styleUrls: ['config.page.scss'],
})
export class ConfigPage implements OnInit {
    public defaultPrinter: BluetoothDevice;
    public categoriesNumber$: Observable<number>;

    constructor(private storageService: StorageService, private categoriesStore: Store<Category>) {}

    async ngOnInit() {
        this.categoriesNumber$ = this.categoriesStore.select(selectCategoriesCount);
        this.defaultPrinter = await this.storageService.getObject(Keys.Printer);
    }
}
