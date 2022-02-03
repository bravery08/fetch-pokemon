import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPokemonService } from './get-pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fetch-pokemon';

pokemon$: Observable<any>;

constructor(
  public dialog: MatDialog,
  private getPokemonService: GetPokemonService) {
  this.pokemon$ = this.getPokemonService.pokemon$;
}

getPokemonButtonClicked() {
  this.getPokemonService.getPokemon();
}

pokemonClicked(pokemon: any) {
  console.log('pokemon message', pokemon.message);
}

openDialog() {
  this.dialog.open(PokeDialogComponent, { panelClass: 'custom-dialog-container'});
}
}
