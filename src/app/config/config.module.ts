import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';
import { ConfigPage } from './config.page';

@NgModule({
    imports: [CommonModule, IonicModule, ConfigPageRoutingModule],
    declarations: [ConfigPage],
})
export class ConfigPageModule {}
