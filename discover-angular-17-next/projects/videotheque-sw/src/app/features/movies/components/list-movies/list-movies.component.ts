import { Component, inject } from '@angular/core';
import { moviesStore } from '../../movies.store';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  store = inject(moviesStore);
}
