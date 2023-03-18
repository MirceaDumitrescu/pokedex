import { Component } from '@angular/core';
import { debounce } from 'lodash-decorators';
import { ApiService } from '../../api/api.service';
import { Pokemon } from '../../api/api.service';
@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
export class AllPokemonsComponent {
  public pokemons: Pokemon[] = [];
  public data: Pokemon[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getAllPokemons().subscribe((pokemons: any) => {
      this.data = pokemons.results;
      if (this.pokemons.length == 0) {
        this.pokemons = this.data
      }
    })
  }

  @debounce(300)
  public searchPokemon(searchText: string) {
    this.pokemons = this.data.filter((pokemon: Pokemon) => pokemon.name.includes(searchText))
  }
}
