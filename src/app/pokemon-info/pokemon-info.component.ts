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
  pokemon: any;

  constructor(
    private actRoute: ActivatedRoute,
    public infoPokedexService: InfoPokedexService
  ) {
    this.pokemon = this.actRoute.snapshot.params.id;
    console.log(JSON.parse(this.pokemon));
  }

  ngOnInit() {}
}
