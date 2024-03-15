import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Movie, Movies } from "./models";

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
    }
  }))
);
