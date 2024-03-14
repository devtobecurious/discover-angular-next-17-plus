import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.routes').then(item => item.movieRoutes)
  }
];
