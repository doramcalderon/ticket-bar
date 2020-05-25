import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { IonicModule } from '@ionic/angular';

import { TicketsConfigRoutingModule } from './tickets-config-routing.module';
import { TicketsConfigPage } from './tickets-config.page';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, TicketsConfigRoutingModule],
    declarations: [TicketsConfigPage],
    // providers: [ImagePicker],
})
export class TicketsConfigModule {}
