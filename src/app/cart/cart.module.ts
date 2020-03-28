import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgxPrintModule } from 'ngx-print';

import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, NgxPrintModule, CartPageRoutingModule],
    declarations: [CartPage, TicketComponent, CartPreviewComponent, DevicesListComponent],
    entryComponents: [CartPreviewComponent, DevicesListComponent],
})
export class CartPageModule {}
