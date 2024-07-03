import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { species } from './species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private httpclient: HttpClient) { }

  getAllSpecies(): Observable<species[]>{
    return this.httpclient.get<species[]>("https://rickandmortyapi.com/api/character")
  }

  getHumanSpecies(): Observable<species[]> {
    return this.httpclient.get<any>("https://rickandmortyapi.com/api/character")
      .pipe(
        map(response => response.results), // extraer los resultados
        map(characters => characters.filter((character: species) => character.species === "Human")) // filtrar solo "Human"
      );
  }
}
