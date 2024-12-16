import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: () => import('./components/todos/todos.component').then(m => m.TodosComponent),
        title: 'Todos'
    },
    {
        path: 'products',
        pathMatch: 'full',
        loadComponent: () => import('./components/product-list/product-list.component').then(m => m.ProductListComponent),
        title: 'Products'
    },
    {
        path: 'bookmarks',
        pathMatch: 'full',
        loadComponent: () => import('./components/bookmarks/bookmarks.component').then(m => m.BookmarksComponent),
        title: 'Bookmarks'
    }
];
