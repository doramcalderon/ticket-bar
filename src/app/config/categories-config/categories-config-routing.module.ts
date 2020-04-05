import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesConfigPage } from './categories-config.page';

const routes: Routes = [
    {
        path: '',
        component: CategoriesConfigPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriesConfigRoutingModule {}
