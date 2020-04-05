import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigPage } from './config.page';

const routes: Routes = [
    {
        path: '',
        component: ConfigPage,
    },
    {
        path: 'categories-config',
        loadChildren: () => import('./categories-config/categories-config.module').then(m => m.CategoriesConfigModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfigPageRoutingModule {}
