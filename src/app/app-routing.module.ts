import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    },
    {
        path: 'config',
        loadChildren: () => import('./config/config.module').then(m => m.ConfigPageModule),
    },
    {
        path: 'category-detail/:categoryId',
        loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
