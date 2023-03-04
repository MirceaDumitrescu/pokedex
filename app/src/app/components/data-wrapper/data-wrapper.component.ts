import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

interface PokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

type Pokemon = {
  name: string;
  url: string;
  id: number;
};

@Component({
  selector: 'app-data-wrapper',
  templateUrl: './data-wrapper.component.html',
  styleUrls: ['./data-wrapper.component.scss'],
})
export class DataWrapperComponent implements OnInit {
  public data: PokemonResponse | null = null;
  public pokemons: Pokemon[] = [];
  public count: number = 0;
  public totalPages: number = 0;
  public currentPage: number = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchPokemons('/pokemon');
  }

  public nextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }

    const nextPageUrl = this.data!.next.split('v2')[1];
    this.fetchPokemons(nextPageUrl);
    this.currentPage += 1;
  }

  public previousPage() {
    if (this.currentPage === 1) {
      return;
    }

    const previousPageUrl = this.data!.previous!.split('v2')[1];
    this.fetchPokemons(previousPageUrl);
    this.currentPage -= 1;
  }

  private fetchPokemons(url: string) {
    this.apiService.get(url).subscribe((res) => {
      this.data = res as PokemonResponse;
      this.pokemons = this.data.results.map((pokemon, index) => {
        const id = index + 1;
        return {
          ...pokemon,
          id,
        };
      });
      this.count = this.data.count;
      this.totalPages = Math.ceil(this.count / 20);
    });
  }
}
