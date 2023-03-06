import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../api/api.service";
import { Pokemon } from "../../api/api.service";
import { FavoritePokemonAction } from "src/app/store/models/actions/pokemons.actions";
import { Store } from "@ngrx/store";
import { StateService } from "src/app/services/state.service";
import { Observable } from "rxjs";

interface FavoritePokemons {
	favorites: Pokemon[];
}

const initialState: FavoritePokemons = { favorites: [] };

@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent extends StateService<FavoritePokemons> implements OnInit {
	public pokemon: any;
	public id: number = 0;
	public loading: boolean = true;
	public isFavorite: boolean = false;
	public isFavoriteRxJs: boolean = false;
	public favorites: Pokemon[] = [];
	public favoritesRXJS: Pokemon[] = [];

	favoritesRxjs$: Observable<Pokemon[]> = this.select((state) => state.favorites);

	addToFavoritesRxjs(pokemon: Pokemon): void {
		this.setState({ favorites: [...this.favoritesRXJS, pokemon] });
	}

	removeFromFavoritesRxjs(pokemon: Pokemon): void {
		this.setState({ favorites: this.favoritesRXJS.filter((favorite: Pokemon) => favorite.id !== pokemon.id) });
	}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges) {
		console.log(changes);
	}
	constructor(
		private route: ActivatedRoute,
		private apiService: ApiService,
		private store: Store<{ favorites: Pokemon[] }>
	) {
		super(initialState);
		this.id = this.route.snapshot.params["id"];

		this.apiService.getPokemon(this.id).subscribe((pokemon: Pokemon) => {
			this.pokemon = pokemon;
			this.loading = false;
		});

		this.store.select("favorites").subscribe((favorites) => {
			this.favorites = favorites;
			this.isFavorite = this.favorites.some((favorite: Pokemon) => favorite.id === this.id);
		});

		this.favoritesRxjs$.subscribe((state: Pokemon[]) => {
			this.favoritesRXJS = state;
			console.log("favorites onInitState", state);
			this.isFavoriteRxJs = state.some((favorite: Pokemon) => favorite.id === this.id);
			console.log("id", this.id);
			console.log("isFavoriteRxJs", this.isFavoriteRxJs);
		});
	}

	public addToFavorites(pokemon: Pokemon): void {
		this.store.dispatch(FavoritePokemonAction({ payload: pokemon }));
	}

	public removeFromFavorites(pokemon: Pokemon): void {
		this.store.dispatch(FavoritePokemonAction({ payload: pokemon }));
	}
}
