import { Component, inject } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';
import { moviesStore } from '../../movies.store';
import { Router } from '@angular/router';

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
  private readonly router = inject(Router);

  createOne(movie: Movie): void {
    this.store.addOne(movie);
    this.navigateToList();
  }

  cancelAndRedirect(): void {
    this.navigateToList();
  }

  private navigateToList(): void {
    this.router.navigate(['movies']);
  }
}
