<<<<<<< Updated upstream
import { Component } from "@angular/core";
=======
import { Component, OnInit } from "@angular/core";
>>>>>>> Stashed changes
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../api/api.service";
import { Pokemon } from "../../api/api.service";

@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.scss"],
})
<<<<<<< Updated upstream
export class PokemonComponent {
	public pokemon: Pokemon | null = null;
	public id: number = 0;
	public loading: boolean = true;

	constructor(private route: ActivatedRoute, private apiService: ApiService) {
		this.id = this.route.snapshot.params["id"];

		this.apiService.getPokemon(this.id).subscribe((res) => {
			this.pokemon = res;
			this.loading = false;
		});
	}
=======
export class PokemonComponent implements OnInit {
	public pokemon: Pokemon | null = null;
	public id: number = 0;
	public loading: boolean = true;
	public isFavorite: boolean = false;

	private localStoragePokemon = localStorage.getItem("favorites");
	private favorites: Pokemon[] = this.localStoragePokemon ? JSON.parse(this.localStoragePokemon) : [];

	constructor(private route: ActivatedRoute, private apiService: ApiService) {
		this.id = this.route.snapshot.params["id"];

		this.apiService.getPokemon(this.id).subscribe((pokemon: Pokemon) => {
			this.pokemon = pokemon;
			this.loading = false;
		});
	}

	ngOnInit(): void {
		this.isFavorite = this.favorites.some((favorite: Pokemon) => favorite.id === this.id);
	}

	public addToFavorites(pokemon: Pokemon): void {
		console.log("add to favorites", pokemon);
		this.favorites.push(pokemon);
		localStorage.setItem("favorites", JSON.stringify(this.favorites));
	}

	public removeFromFavorites(pokemon: Pokemon): void {
		this.favorites = this.favorites.filter((favorite: Pokemon) => favorite.id !== pokemon.id);
		localStorage.setItem("favorites", JSON.stringify(this.favorites));
	}
>>>>>>> Stashed changes
}
