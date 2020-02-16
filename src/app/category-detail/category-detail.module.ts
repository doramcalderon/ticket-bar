import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailPageRoutingModule } from './category-detail-routing.module';

import { CategoryDetailPage } from './category-detail.page';
import { CartModule } from '../cart/cart.module';
import { TicketTypeCardComponent } from './components/ticket-type-card/ticket-type-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CategoryDetailPageRoutingModule, CartModule],
    declarations: [CategoryDetailPage, TicketTypeCardComponent],
    exports: [TicketTypeCardComponent],
})
export class CategoryDetailPageModule {}
