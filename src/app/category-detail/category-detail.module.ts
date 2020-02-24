import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketBarCommonModule } from '../common/ticket-bar-common.module';
import { CategoryDetailPageRoutingModule } from './category-detail-routing.module';
import { CategoryDetailPage } from './category-detail.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CategoryDetailPageRoutingModule, TicketBarCommonModule],
    declarations: [CategoryDetailPage],
})
export class CategoryDetailPageModule {}
