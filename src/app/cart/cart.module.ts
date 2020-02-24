import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';

import * as fromCart from '../cart/store/cart.reducer';
import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
        CartPageRoutingModule,
    ],
    declarations: [CartPage, TicketComponent],
})
export class CartPageModule {}
