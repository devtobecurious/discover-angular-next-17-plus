import { Component, inject, signal } from '@angular/core';
import { moviesStore } from '../../movies.store';
import { Movie } from '../../models';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [UpdateMovieComponent],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  store = inject(moviesStore);
  toEditMovie = signal<Movie | undefined>(undefined);

  editOne(movie: Movie) {
    this.toEditMovie.set(movie);
  }
}
