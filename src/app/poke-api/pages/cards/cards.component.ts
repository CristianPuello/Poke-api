import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { result } from '../../interface/pokemon.intrface';
import { ServiceService } from '../../services/pokemon.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls:['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  pokemons:result[]=[]

  constructor(private pokemonServices:ServiceService, private router:Router ) { }


  ngOnInit(): void {
    this.pokemonServices.Pokemones().subscribe((data)=> {
      this.pokemons = data 
      ;})
  }

  goPokemonid(id:number){
    this.router.navigate(['pokemon', id])
  }

}
