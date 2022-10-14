import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { result } from '../../interface/pokemon.intrface';


@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.scss'],
})
export class VerPokemonComponent implements OnInit {

    data!:result

  constructor(private pokemonservise:ServiceService, private router:ActivatedRoute ) {}

  ngOnInit(): void {
    this.router.params.subscribe( (params) =>{    
      console.log(params);
      this.pokemonservise.PokemonesId(params['id']).subscribe(data =>
        {
          this.data=data
          
        }
        )


    })
     

    
  }
}
