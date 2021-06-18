import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    }
    
  ];

  get personajes (): Personaje[]{
    //... : operador spread, separa cada uno de los elementos de la lista
    // es buena práctica de js para no pasar las referencias
    return [...this._personajes];
  }

  constructor(){
  }


  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }

}