import { Routes } from '@angular/router';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

export const movieRoutes: Routes = [
  {
    path: '',
    component: ListMoviesComponent
  },
  {
    path: 'create',
    component: CreateMovieComponent
  }
];
