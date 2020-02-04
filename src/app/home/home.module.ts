import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CartModule } from '../cart/cart.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule, CartModule],
    declarations: [HomePage, CategoryButtonComponent, CategoriesListComponent],
})
export class HomePageModule {}
