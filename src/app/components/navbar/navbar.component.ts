import { Component } from "@angular/core";
import { Pokemon } from "src/app/api/api.service";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
<<<<<<< Updated upstream
	public favorites: Pokemon[] = [];

	constructor() {}
=======
	private localStoragePokemon = localStorage.getItem("favorites");
	public favorites: Pokemon[] = this.localStoragePokemon ? JSON.parse(this.localStoragePokemon).length : [];
>>>>>>> Stashed changes
}
