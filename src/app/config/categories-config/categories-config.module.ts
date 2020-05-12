import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ColorPickerModule } from 'ngx-color-picker';

import { CategoriesConfigRoutingModule } from './categories-config-routing.module';
import { CategoriesConfigPage } from './categories-config.page';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';
import { CategoryConfigComponent } from './components/category-config/category-config.component';
import { IconPickerComponent } from './components/icon-picker/icon-picker.component';
import { TicketConfigComponent } from './components/ticket-config/ticket-config.component';
import { CategoriesEffects } from './store/categories.effects';
import * as fromCategories from './store/categories.reducer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ColorPickerModule,
        EffectsModule.forFeature([CategoriesEffects]),
        StoreModule.forFeature(fromCategories.categoriesFeatureKey, fromCategories.reducer),
        CategoriesConfigRoutingModule,
    ],
    declarations: [
        CategoriesConfigPage,
        CategoryConfigComponent,
        CategoriesConfigPopoverComponent,
        TicketConfigComponent,
        IconPickerComponent,
    ],
    entryComponents: [CategoriesConfigPopoverComponent, CategoryConfigComponent, TicketConfigComponent, IconPickerComponent],
    exports: [CategoryConfigComponent],
})
export class CategoriesConfigModule {}
