import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataWrapperComponent } from './components/data-wrapper/data-wrapper.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: DataWrapperComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
