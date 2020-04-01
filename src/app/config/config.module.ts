import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfigPage } from './config.page';
import { ConfigPageRoutingModule } from './config-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ConfigPageRoutingModule],
    declarations: [ConfigPage],
})
export class ConfigPageModule {}
