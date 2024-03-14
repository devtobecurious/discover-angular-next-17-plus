import { Routes } from '@angular/router';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';

export const movieRoutes: Routes = [
  {
    path: 'create',
    component: CreateMovieComponent
  }
];
