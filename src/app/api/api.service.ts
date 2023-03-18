import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

export interface Pokemon {
  abilities: any[];
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiUrl = 'https://pokeapi.co/api/v2';

  constructor() { }

  public get<T>(query: string): Observable<T> {
    return from(fetch(`${this._apiUrl}${query}`).then((res) => res.json()));
  }

  public getPokemon(id: number): Observable<Pokemon> {
    return this.get(`/pokemon/${id}`);
  }

  public getAllPokemons(): Observable<Pokemon[]> {
    return this.get('/pokemon?limit=1281');
  }
}
