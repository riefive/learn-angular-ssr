import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'todos', loadChildren: () => import('./components/todo.routes').then(m => m.routes) },
    { path: '**', component: PageNotFoundComponent }
];