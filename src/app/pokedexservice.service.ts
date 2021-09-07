import { Injectable, Optional } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoPokedexService {

  idpoke:any;
  pokemon: any;
  apinfo:any;
  arrayNuevo: any;
  id: any;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getAllPokemon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=500');
  }

  getInfPokemon(idpoke): Observable<any> {
 
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.idpoke);
    
  }
  
}

