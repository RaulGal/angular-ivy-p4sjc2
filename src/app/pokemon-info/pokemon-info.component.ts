import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPokemonModel } from '../info-pokemon-model';
import { InfoPokedexService } from '../pokedexservice.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon: InfoPokemonModel = {
    name: '',
    id: 0,
    stats: '',
    weight: ''
  };

  pokemon_id: any;

  constructor(
    private route: ActivatedRoute,
    public infoPokedexService: InfoPokedexService
  ) {}

  ngOnInit(): void {
    let _this = this;
    _this.route.queryParams.subscribe(params => {
      _this.pokemon.id = params.id;
      _this.pokemon.name = params.name;
      _this.pokemon.stats = params.stats;
      _this.pokemon.weight = params.weight;

      console.log('LOG DE LOS pokemons', _this.pokemon.id, _this.pokemon.name);
    });
  }
}
