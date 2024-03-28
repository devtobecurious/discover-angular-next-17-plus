import { Component, inject } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';
import { moviesStore } from '../../movies.store';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [ChildEditMovieComponent],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {
  private readonly store = inject(moviesStore);

  updateOne(movie: Movie): void {
    this.store.updateOne(movie);
  }
}
