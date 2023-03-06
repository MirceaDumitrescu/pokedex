import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataWrapperComponent } from "./components/data-wrapper/data-wrapper.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
<<<<<<< Updated upstream
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
	declarations: [AppComponent, DataWrapperComponent, PokemonComponent, NavbarComponent, FavoritesComponent],
	imports: [BrowserModule, AppRoutingModule],
=======
import { FavoritesComponent } from "./pages/favorites/favorites.component";

import { StoreModule } from "@ngrx/store";
import { PokemonReducer } from "./store/reducers/favorites.reducer";

@NgModule({
	declarations: [AppComponent, DataWrapperComponent, PokemonComponent, NavbarComponent, FavoritesComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({
			favorites: PokemonReducer,
		}),
	],
>>>>>>> Stashed changes
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
