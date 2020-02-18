import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CartModule } from '../cart/cart.module';
import { TicketBarCommonModule } from '../common/ticket-bar-common.module';
import { CategoryDetailPageRoutingModule } from './category-detail-routing.module';
import { CategoryDetailPage } from './category-detail.page';
import { TicketTypeCardComponent } from './components/ticket-type-card/ticket-type-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CategoryDetailPageRoutingModule, CartModule, TicketBarCommonModule],
    declarations: [CategoryDetailPage, TicketTypeCardComponent],
    exports: [TicketTypeCardComponent],
})
export class CategoryDetailPageModule {}
