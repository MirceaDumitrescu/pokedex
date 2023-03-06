import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Pokemon } from "src/app/api/api.service";
import { FavoritePokemonActionRemove } from "src/app/store/models/actions/pokemons.actions";

@Component({
	selector: "app-favorites",
	templateUrl: "./favorites.component.html",
	styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent {
	public favorites: Pokemon[] = [];

	constructor(private store: Store<{ favorites: Pokemon[] }>) {
		this.store.select("favorites").subscribe((favorites) => {
			this.favorites = favorites;
		});
	}

	public removeFromFavorites(pokemon: Pokemon): void {
		this.store.dispatch(FavoritePokemonActionRemove({ payload: pokemon }));
	}
}
