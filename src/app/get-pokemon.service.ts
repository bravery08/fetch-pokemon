import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService implements OnInit {

  private pokemonBS: BehaviorSubject<any> = new BehaviorSubject([]);
  pokemon$ = this.pokemonBS.asObservable();

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  getPokemon() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=151').subscribe((response: any) => {
      console.log('called Pokemon', response);
      this.pokemonBS.next(response.results);
    });
  }
}
