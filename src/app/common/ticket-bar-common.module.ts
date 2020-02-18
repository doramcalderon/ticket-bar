import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketUnitsSelectorComponent } from './ticket-units-selector/ticket-units-selector.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [TicketUnitsSelectorComponent],
    exports: [TicketUnitsSelectorComponent],
})
export class TicketBarCommonModule {}
