import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataWrapperComponent } from "./components/data-wrapper/data-wrapper.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";

import { PokemonReducer } from "./store/reducers/favorites.reducer";
import { FetchDataReducer } from "./store/reducers/fetchedData.reducer";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AppComponent, DataWrapperComponent, PokemonComponent, NavbarComponent, FavoritesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      favorites: PokemonReducer,
      fetchedData: FetchDataReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
