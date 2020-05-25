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
        loadChildren: () => import('./categories-config/categories-config.module').then((m) => m.CategoriesConfigModule),
    },
    {
        path: 'tickets-config',
        loadChildren: () => import('./tickets-config/tickets-config.module').then((m) => m.TicketsConfigModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfigPageRoutingModule {}
