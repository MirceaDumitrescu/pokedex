import { Component } from "@angular/core";
import { Pokemon } from "src/app/api/api.service";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
	public favorites: Pokemon[] = [];

	constructor() {}
}
