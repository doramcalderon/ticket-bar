import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { CategoriesEffects } from '../config/categories-config/store/categories.effects';
import * as fromCategories from '../config/categories-config/store/categories.reducer';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { TicketTypeCardComponent } from './components/ticket-type-card/ticket-type-card.component';
import { TicketUnitsSelectorComponent } from './components/ticket-units-selector/ticket-units-selector.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EffectsModule.forFeature([CategoriesEffects]),
        StoreModule.forFeature(fromCategories.categoriesFeatureKey, fromCategories.reducer),
    ],
    declarations: [CartButtonComponent, TicketTypeCardComponent, TicketUnitsSelectorComponent],
    exports: [TranslateModule, CartButtonComponent, TicketTypeCardComponent, TicketUnitsSelectorComponent],
})
export class TicketBarCommonModule {}
