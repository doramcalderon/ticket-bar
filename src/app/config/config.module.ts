import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';
import { ConfigPage } from './config.page';
import { TicketBarCommonModule } from '../common/ticket-bar-common.module';

@NgModule({
    imports: [CommonModule, IonicModule, ConfigPageRoutingModule, TicketBarCommonModule],
    declarations: [ConfigPage],
})
export class ConfigPageModule {}
