import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/PageNotFound/PageNotFound.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./website/website.module')
        .then(mod => mod.WebsiteModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
        .then(mod => mod.AdminModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {message: 'From ROOT'}
    }
];
