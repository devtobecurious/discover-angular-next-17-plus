import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Movie, Movies } from "./models";
import { computed } from "@angular/core";

export interface MoviesState {
  items: Movies,
  loading: boolean
}

export const initialMoviesState: MoviesState = {
  items: [],
  loading: false
}

export const moviesStore = signalStore(
  { providedIn: 'root' },
  withState(initialMoviesState),
  withMethods(store => ({
    addOne(item: Movie) {
      const nextId = store.items().length + 1;
      item.id = nextId;

      patchState(store, {loading: true});
      patchState(store, {items: [...store.items(), item]})
      patchState(store, {loading: false});
    },
    updateOne(item: Movie) {
      patchState(store, {loading: true});

      const movieToUpdate = store.items().find(movie => item.id === movie.id);
      if(movieToUpdate) { // type guard
        movieToUpdate.description = item.description;
        movieToUpdate.title = item.title;

        // should be bugger ;=)
        patchState(store, {items: [...store.items(), item]});
      }

      patchState(store, {loading: false});
    }
  })),
  withComputed(store => ({
    empty: computed(() => store.items().length === 0)
  }))
);
