import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Category } from '../../common/model/category.model';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';
import { CategoryConfigComponent } from './components/category-config/category-config.component';
import * as CategoriesActions from './store/categories.actions';
import * as CategoriesSelectors from './store/categories.selectors';

@Component({
    selector: 'tb-categories-config',
    templateUrl: 'categories-config.page.html',
    styleUrls: ['categories-config.page.scss'],
})
export class CategoriesConfigPage implements OnInit {
    public categories$: Observable<Category[]>;

    constructor(
        private modalCtrl: ModalController,
        private popoverCtrl: PopoverController,
        private alertCtrl: AlertController,
        private categoriesStore: Store<Category>,
    ) {}

    async ngOnInit() {
        this.categories$ = this.categoriesStore.select(CategoriesSelectors.selectCategories);
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
                        this.categoriesStore.dispatch(CategoriesActions.deleteCategory({ id: category.id }));
                    },
                },
            ],
        });
        await alert.present();
    }
}
