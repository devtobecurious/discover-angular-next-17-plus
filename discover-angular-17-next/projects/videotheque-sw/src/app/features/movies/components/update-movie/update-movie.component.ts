import { Component, inject, output } from '@angular/core';
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
  requestToFullyCancel = output();

  updateOne(movie: Movie): void {
    this.store.updateOne(movie);
  }

  cancelUpdate(): void {
    this.requestToFullyCancel.emit();
  }
}
