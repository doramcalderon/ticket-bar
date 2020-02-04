import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';

import { CartComponent } from './components/cart/cart.component';
import * as fromCart from './components/cart/store/cart.reducer';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule, StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer)],
    declarations: [HomePage, CategoryButtonComponent, CategoriesListComponent, CartComponent],
    entryComponents: [CartComponent],
})
export class HomePageModule {}
