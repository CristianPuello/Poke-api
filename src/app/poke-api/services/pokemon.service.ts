import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { result } from '../interface/pokemon.intrface';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  private servicioUrl:string = 'http://192.168.0.15:5002/api/pokemon'
  

  constructor( private http:HttpClient ){}


  Pokemones():Observable<result[]>{
  
    return this.http.get<{result:result[]}>(this.servicioUrl).pipe(map((data)=> data.result))

  }

  PokemonesId(id:number):Observable<result>{
  
    return this.http.get<{result:result}>(`${this.servicioUrl}/${id}`).pipe(map((data)=> data.result))

  }
  



}
