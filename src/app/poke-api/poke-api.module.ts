import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './pages/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';




@NgModule({
  declarations: [
    CardsComponent,
    HeaderComponent,
    VerPokemonComponent

  ],
  exports:[
    VerPokemonComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokeApiModule { }
