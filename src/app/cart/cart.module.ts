import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';

import * as fromCart from '../cart/store/cart.reducer';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer)],
    declarations: [CartComponent],
    entryComponents: [CartComponent],
})
export class CartModule {}
