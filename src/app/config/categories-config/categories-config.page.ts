import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Category } from '../../common/model/category.model';
import { Keys } from '../../storage.model';
import { StorageService } from '../../storage.service';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';

@Component({
    selector: 'tb-categories-config',
    templateUrl: 'categories-config.page.html',
    styleUrls: ['categories-config.page.scss'],
})
export class CategoriesConfigPage implements OnInit {
    public categories: Category[];

    constructor(private popoverCtrl: PopoverController, private storageService: StorageService) {}

    async ngOnInit() {
        this.categories = await this.storageService.getObject(Keys.Categories);
    }

    public async showActions(): Promise<void> {
        const popover = await this.popoverCtrl.create({
            component: CategoriesConfigPopoverComponent,
            cssClass: 'more-popover',
        });
        await popover.present();
    }
}
