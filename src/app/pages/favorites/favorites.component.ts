<<<<<<< Updated upstream
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

=======
import { Component } from "@angular/core";
import { Pokemon } from "src/app/api/api.service";

@Component({
	selector: "app-favorites",
	templateUrl: "./favorites.component.html",
	styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent {
	private localStoragePokemon = localStorage.getItem("favorites");
	public favorites: Pokemon[] = this.localStoragePokemon ? JSON.parse(this.localStoragePokemon) : [];

	public removeFromFavorites(pokemon: Pokemon): void {
		this.favorites = this.favorites.filter((favorite: Pokemon) => favorite.id !== pokemon.id);
		localStorage.setItem("favorites", JSON.stringify(this.favorites));
	}
>>>>>>> Stashed changes
}
