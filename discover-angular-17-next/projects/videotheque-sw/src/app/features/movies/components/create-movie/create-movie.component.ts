import { Component, inject } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';
import { moviesStore } from '../../movies.store';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [ChildEditMovieComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css',
  // providers: [moviesStore]
})
export class CreateMovieComponent {
  store = inject(moviesStore);

  createOne(movie: Movie): void {
    this.store.addOne(movie);
  }
}
