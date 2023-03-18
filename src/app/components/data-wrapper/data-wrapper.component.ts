import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchDataAction } from 'src/app/store/models/actions/pokemons.actions';
import { ApiService } from '../../api/api.service';
import { FetchResponse } from 'src/app/store/reducers/fetchedData.reducer';

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export type Pokemon = {
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
  public data: FetchResponse | undefined = undefined;
  public pokemons: Pokemon[] = [];
  public count: number = 0;
  public totalPages: number = 0;
  public currentPage: number = 1;

  constructor(private apiService: ApiService, private store: Store<{ fetchedData: FetchResponse }>) {
    // INFO: Before fetching data we are checking if the NGRX store already has that page memoized
    this.store.select("fetchedData").subscribe((fetchedData: Partial<FetchResponse>) => {
      if (fetchedData[this.currentPage]) {
        this.data = fetchedData
      }
    })
  }

  ngOnInit(): void {
    /* 
*   * If this data doesnt contain anything fetch first page api
* */
    if (!this.data?.[this.currentPage]) {
      this.fetchPokemons('/pokemon');
    }


  }


  /* next/back logic
   * Increase the page number each time
   * also fetch data with the url provided by the api for next or previous
   */
  public nextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }

    const nextPageUrl = this.data?.[this.currentPage].next.split('v2')[1];
    this.currentPage += 1;
    this.fetchPokemons(nextPageUrl);

  }

  public previousPage() {
    if (this.currentPage === 1) {
      return;
    }

    const previousPageUrl = this.data?.[this.currentPage].previous!.split('v2')[1];
    this.currentPage -= 1;
    this.fetchPokemons(previousPageUrl);
  }

  /*
   * main api service subscription
   * if this.data already has data for the page your are currently on 
   * it will not fetch just re render data with the assignPokemonId function 
   */
  private fetchPokemons(url: string) {
    if (this.data?.[this.currentPage]) {
      this.assignPokemonId(this.data[this.currentPage])
      return
    }

    this.apiService.get(url).subscribe((res: any) => {
      this.data = { [this.currentPage]: res }
      this.store.dispatch(FetchDataAction({ payload: res, page: this.currentPage }))
      this.assignPokemonId(res)
    });
  }

  private assignPokemonId(data: any) {
    this.pokemons = data.results.map((pokemon: any, index: any) => {
      const id = index + 1;
      return {
        ...pokemon,
        id,
      };
    });
    this.count = data.count;
    this.totalPages = Math.ceil(this.count / 20);

  }


}
