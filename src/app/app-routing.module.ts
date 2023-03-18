import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataWrapperComponent } from "./components/data-wrapper/data-wrapper.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { AllPokemonsComponent } from "./pages/all-pokemons/all-pokemons.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";

const routes: Routes = [
  {
    path: "",
    component: DataWrapperComponent,
  },
  {
    path: "pokemon/:id",
    component: PokemonComponent,
  },
  {
    path: "favorites",
    component: FavoritesComponent,
  },
  {
    path: "all",
    component: AllPokemonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
