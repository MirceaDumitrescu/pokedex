import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../api/api.service";
import { Pokemon } from "../../api/api.service";
import { FavoritePokemonAction } from "src/app/store/models/actions/pokemons.actions";
import { Store } from "@ngrx/store";

@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent {
	public pokemon: Pokemon | null = null;
	public id: number = 0;
	public loading: boolean = true;
	public isFavorite: boolean = false;
	public favorites: Pokemon[] = [];

	constructor(
		private route: ActivatedRoute,
		private apiService: ApiService,
		private store: Store<{ favorites: Pokemon[] }>
	) {
		this.id = this.route.snapshot.params["id"];

		this.apiService.getPokemon(this.id).subscribe((pokemon: Pokemon) => {
			this.pokemon = pokemon;
			this.loading = false;
		});

		this.store.select("favorites").subscribe((favorites) => {
			this.favorites = favorites;
			this.isFavorite = this.favorites.some((favorite: Pokemon) => favorite.id === this.id);
		});
	}

	public addToFavorites(pokemon: Pokemon): void {
		this.store.dispatch(FavoritePokemonAction({ payload: pokemon }));
	}

	public removeFromFavorites(pokemon: Pokemon): void {
		this.store.dispatch(FavoritePokemonAction({ payload: pokemon }));
	}
}
