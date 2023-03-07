import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/api/api.service";
import { Store } from "@ngrx/store";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public favorites: number = 0;
  public favoritesRXJS: number = 0;



  constructor(private store: Store<{ favorites: Pokemon[] }>) {
  }

  ngOnInit(): void {
    this.store.select("favorites").subscribe((favorites) => {
      this.favorites = favorites.length;
    });

  }
}
