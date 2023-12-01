import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/api/api.service";
import { Store } from "@ngrx/store";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public favorites: number = 0;
  public favoritesRXJS: number = 0;
  isLoggedIn: boolean = false;
  userEmail: string | null = '';



  constructor(private store: Store<{ favorites: Pokemon[] }>, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.store.select("favorites").subscribe((favorites) => {
      this.favorites = favorites.length;
      this.auth.isLoggedIn$.subscribe((status) => (this.isLoggedIn = status));
      this.auth.email$.subscribe((email) => (this.userEmail = email));
    });

  }
  handleLogOut() {
    this.auth.logOut();
  }
}
