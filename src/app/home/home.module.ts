import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TicketBarCommonModule } from '../common/ticket-bar-common.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule, TicketBarCommonModule],
    declarations: [HomePage, CategoryButtonComponent, CategoriesListComponent, CategoryFilterComponent],
})
export class HomePageModule {}
