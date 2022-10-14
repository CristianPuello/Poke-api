import { Component, ElementRef, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { ServiceService } from '../../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor(private ServicePokemon:ServiceService ) { }

  

  buscar(){
    const value =  this.txtBuscar.nativeElement.value;
    
    this.txtBuscar.nativeElement.value = '';
    
  }




}
