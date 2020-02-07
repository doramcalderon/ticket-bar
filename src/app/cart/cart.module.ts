import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';

import * as fromCart from '../cart/store/cart.reducer';
import { CartComponent } from './components/cart/cart.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer)],
    declarations: [CartComponent, CartButtonComponent, TicketComponent],
    entryComponents: [CartComponent],
    exports: [CartButtonComponent],
})
export class CartModule {}
