import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgxPrintModule } from 'ngx-print';

import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, NgxPrintModule, CartPageRoutingModule],
    declarations: [CartPage, TicketComponent, CartPreviewComponent],
})
export class CartPageModule {}
