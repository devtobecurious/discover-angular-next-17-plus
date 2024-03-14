import { Component } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [ChildEditMovieComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {
  createOne(movie: Movie): void {
    console.info(`${movie.title} is added`);
  }
}
