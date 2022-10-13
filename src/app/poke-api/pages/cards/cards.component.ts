import { Component, OnInit,} from '@angular/core';
import { result } from '../../interface/pokemon.intrface';
import { ServiceService } from '../../services/pokemon.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  pokemons:result[]=[]

  constructor(private pokemonServices:ServiceService ) { }


  ngOnInit(): void {
    this.pokemonServices.Pokemones().subscribe((data)=> {
      this.pokemons = data 
      console.log(data)
      ;})
  }

}
