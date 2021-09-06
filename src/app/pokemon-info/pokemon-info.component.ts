import { Component, OnInit } from '@angular/core';
import { InfoPokemonModel } from '../info-pokemon-model';
import { InfoPokedexService } from '../pokedexservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  apinfo: any;
  arrayNuevo2: any;
  pokemon: any;
  pokemonInf: any;

  constructor(
    private actRoute: ActivatedRoute,
    public Pokedexservice: InfoPokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.pokemon = this.actRoute.snapshot.params.id;
    console.log(JSON.parse(this.pokemon));
    this.pokemonInf = JSON.parse(this.pokemon);
    console.log('log para ver si es un objeto', this.pokemonInf);
  }

  ngOnInit() {
    this.Pokedexservice.getInfPokemon().subscribe(data => {
      this.apinfo = data.results;

      this.arrayNuevo2 = [];

      for (let i = 0; i < this.apinfo.length; i++) {
        this.arrayNuevo2[i] = {
          idpokemon: i,
          weight: this.apinfo[i].weight
        };
        console.log('objeto arraynuevo2', this.arrayNuevo2[i]);
      }
    });
  }
}
