import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [HomePage, CategoryButtonComponent],
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule],
})
export class HomePageModule {}
