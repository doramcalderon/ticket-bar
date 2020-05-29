import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketConfigComponent } from './ticket-config/ticket-config.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
    declarations: [TicketConfigComponent],
    entryComponents: [TicketConfigComponent],
})
export class ConfigComponentsModule {}
