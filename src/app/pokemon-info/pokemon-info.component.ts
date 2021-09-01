import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon_id: any;

  constructor(private actRoute: ActivatedRoute) {
    this.pokemon_id = this.actRoute.snapshot.params.id;
    console.log(this.pokemon_id);
  }
  ngOnInit() {}
}
