import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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
        private translate: TranslateService,
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
        const translations = this.translate.instant(
            [
                'CATEGORIES.REMOVE_CATEGORY_CONFIRM.TITLE',
                'CATEGORIES.REMOVE_CATEGORY_CONFIRM.TEXT',
                'CATEGORIES.REMOVE_CATEGORY_CONFIRM.REMOVE',
                'COMMON.CANCEL',
            ],
            { categoryName: category.name },
        );
        const alert = await this.alertCtrl.create({
            header: translations['CATEGORIES.REMOVE_CATEGORY_CONFIRM.TITLE'],
            message: translations['CATEGORIES.REMOVE_CATEGORY_CONFIRM.TEXT'],
            buttons: [
                {
                    text: translations['COMMON.CANCEL'],
                    role: 'cancel',
                },
                {
                    text: translations['CATEGORIES.REMOVE_CATEGORY_CONFIRM.REMOVE'],
                    handler: () => {
                        this.categoriesStore.dispatch(CategoriesActions.deleteCategory({ id: category.id }));
                    },
                },
            ],
        });
        await alert.present();
    }
}
