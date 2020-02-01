import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule],
    declarations: [HomePage, CategoryButtonComponent, CategoriesListComponent, CartComponent],
    entryComponents: [CartComponent],
})
export class HomePageModule {}
