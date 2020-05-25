import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsConfigPage } from './tickets-config.page';

const routes: Routes = [
    {
        path: '',
        component: TicketsConfigPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TicketsConfigRoutingModule {}
