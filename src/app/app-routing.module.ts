import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './poke-api/pages/cards/cards.component';
import { VerPokemonComponent } from './poke-api/pages/ver-pokemon/ver-pokemon.component';


const routes: Routes = [

  {
    path:'',
    component:CardsComponent,
    pathMatch:'full'
  },
  {
    path:'detalles/:id',
    component:VerPokemonComponent
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
