import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketBarCommonModule } from '../common/ticket-bar-common.module';
import { ConfigPageRoutingModule } from './config-routing.module';
import { ConfigPage } from './config.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, ConfigPageRoutingModule, TicketBarCommonModule],
    declarations: [ConfigPage],
})
export class ConfigPageModule {}
