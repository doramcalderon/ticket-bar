import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';

import { Category } from '../../common/model/category.model';
import { CategoriesService } from '../../common/services/categories.service';
import { Keys } from '../../storage.model';
import { StorageService } from '../../storage.service';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';
import { CategoryConfigComponent } from './components/category-config/category-config.component';

@Component({
    selector: 'tb-categories-config',
    templateUrl: 'categories-config.page.html',
    styleUrls: ['categories-config.page.scss'],
})
export class CategoriesConfigPage implements OnInit {
    public categories: Category[];

    constructor(
        private modalCtrl: ModalController,
        private popoverCtrl: PopoverController,
        private alertCtrl: AlertController,
        private storageService: StorageService,
        private categoriesService: CategoriesService,
    ) {}

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

    public async openCategoryConfig(category?: Category): Promise<void> {
        const modal = await this.modalCtrl.create({
            component: CategoryConfigComponent,
            componentProps: { category },
        });
        await modal.present();
    }

    public async delete(category: Category): Promise<void> {
        const alert = await this.alertCtrl.create({
            header: 'Borrar categoría',
            message: `¿Quieres borrar la categoría ${category.name} ?`,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                },
                {
                    text: 'Borrar',
                    handler: () => {
                        this.categoriesService.removeCategory(category.id);
                    },
                },
            ],
        });
        await alert.present();
    }
}
