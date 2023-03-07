import { Store } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";

interface FavoritePokemons {

  favorites: Pokemon[];
}

const initialState: FavoritePokemons = { favorites: [] };
export class FavoriteRxjsStore extends Store<FavoriteRxjsStore> {

  constructor() {
    super(new FavoriteRxjsStore())
  }


  addToFavoritesRxjs(pokemon: Pokemon): void {
    this.setState({ favorites: [...this.favoritesRXJS, pokemon] });
  }

  removeFromFavoritesRxjs(pokemon: Pokemon): void {
    this.setState({ favorites: this.favoritesRXJS.filter((favorite: Pokemon) => favorite.id !== pokemon.id) });
  }

} 
