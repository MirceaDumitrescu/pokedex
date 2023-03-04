import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Pokemon } from '../../api/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  public pokemon: Pokemon | null = null;
  public id: number = 0;
  public loading: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.id = this.route.snapshot.params['id'];

    this.apiService.getPokemon(this.id).subscribe((res) => {
      this.pokemon = res;
      this.loading = false;
    });
  }
}
