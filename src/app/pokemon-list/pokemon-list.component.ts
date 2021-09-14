import { Component, OnInit } from '@angular/core';
import { InfoPokedexService } from '../pokedexservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  idPrueba = '234';

  title = 'Pokedex';

  pokemon: any;
  pokemonName: any;
  pokemonId: any;
  arrayNuevo: any;
  apinfo: any;
  arrayNuevo2: any;
  idpoke: any;

  constructor(
    public Pokedexservice: InfoPokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.Pokedexservice.getAllPokemon().subscribe(data => {
      this.pokemon = data.results;

      this.arrayNuevo = [];

      for (let i = 0; i < this.pokemon.length; i++) {
        this.arrayNuevo[i] = {
          name: this.pokemon[i].name,
          id: i + 1,
          image:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
            (i + 1) +
            '.png'
        };
        //this.arrayNuevo[i].id = this.idpoke;
      }
    });
  }

  navigate(data) {
    this.router.navigate(['/pokemon-info', JSON.stringify(data)]);
  }
  searchPokemon(name: string) {
    console.log("busqueda",name)
    return this.arrayNuevo.filter(this.arrayNuevo.name);

 
  }

}
