import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ColorPickerModule } from 'ngx-color-picker';

import { CategoriesConfigRoutingModule } from './categories-config-routing.module';
import { CategoriesConfigPage } from './categories-config.page';
import { CategoriesConfigPopoverComponent } from './components/categories-config-popover/categories-config-popover.component';
import { IconPickerComponent } from './components/icon-picker/icon-picker.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ColorPickerModule, CategoriesConfigRoutingModule],
    declarations: [CategoriesConfigPage, NewCategoryComponent, CategoriesConfigPopoverComponent, IconPickerComponent],
    entryComponents: [CategoriesConfigPopoverComponent, NewCategoryComponent, IconPickerComponent],
    exports: [NewCategoryComponent],
})
export class CategoriesConfigModule {}
