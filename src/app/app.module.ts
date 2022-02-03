import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexIdPipe } from './pokedex-id.pipe';
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexIdPipe,
    PokeDialogComponent,
  ],

  entryComponents: [
    PokeDialogComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
