import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketBarCommonModule } from '../../common/ticket-bar-common.module';
import { TicketConfigComponent } from './ticket-config/ticket-config.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, TicketBarCommonModule],
    declarations: [TicketConfigComponent],
    entryComponents: [TicketConfigComponent],
})
export class ConfigComponentsModule {}
