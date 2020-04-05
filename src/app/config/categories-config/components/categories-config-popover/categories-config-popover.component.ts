import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { NewCategoryComponent } from '../new-category/new-category.component';

@Component({
    selector: 'tb-categories-config-popover',
    templateUrl: 'categories-config-popover.component.html',
    styleUrls: ['categories-config-popover.component.scss'],
})
export class CategoriesConfigPopoverComponent implements OnInit {
    constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) {}

    ngOnInit() {}

    public async openNewCategory(): Promise<void> {
        // dismiss the popover menu from wich this coomponen is opened
        this.popoverCtrl.dismiss();

        const modal = await this.modalCtrl.create({
            component: NewCategoryComponent,
        });
        modal.present();
    }
}
