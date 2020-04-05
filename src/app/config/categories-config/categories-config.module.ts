import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ColorPickerModule } from 'ngx-color-picker';

import { CategoriesConfigRoutingModule } from './categories-config-routing.module';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { CategoriesConfigPage } from './categories-config.page';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ColorPickerModule, CategoriesConfigRoutingModule],
    declarations: [CategoriesConfigPage, NewCategoryComponent, CategoriesConfigPopoverComponent],
    entryComponents: [CategoriesConfigPopoverComponent, NewCategoryComponent],
    exports: [NewCategoryComponent],
})
export class CategoriesConfigModule {}
