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
  idpokemon: any;
  idpoke:any;
  arrayNuevo:any;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    public Pokedexservice: InfoPokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.pokemon = this.actRoute.snapshot.params.id;
    console.log(JSON.parse(this.pokemon));
    this.pokemonInf = JSON.parse(this.pokemon);
  }

  ngOnInit() {
    this.Pokedexservice.getInfPokemon().subscribe(data => {
     
      this.apinfo = data;
     
      
      

      this.arrayNuevo2 = [];

      for (let i = 0; i < this.apinfo.length; i++) {
        this.arrayNuevo2[i] = {
          idpokemon: i + 1,
          weight: this.apinfo[i].weight
        };
        
      }
      //console.log("get", this.apinfo)
    }
    )
    
    ;

    
  }
}
