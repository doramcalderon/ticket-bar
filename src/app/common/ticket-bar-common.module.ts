import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { TicketTypeCardComponent } from './components/ticket-type-card/ticket-type-card.component';
import { TicketUnitsSelectorComponent } from './components/ticket-units-selector/ticket-units-selector.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [CartButtonComponent, TicketTypeCardComponent, TicketUnitsSelectorComponent],
    exports: [CartButtonComponent, TicketTypeCardComponent, TicketUnitsSelectorComponent],
})
export class TicketBarCommonModule {}
