import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  //@Input() personajes: any =[]; // el input hace que se pueda enviar datos por el tag [personajes] esto desde el padre
  @Input('data') personajes: Personaje[] =[]; // el input hace que se pueda enviar datos por el tag [data] esto desde el padre
}
