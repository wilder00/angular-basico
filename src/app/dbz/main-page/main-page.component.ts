import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  defaultCharacter: Personaje = {
    nombre: 'Bills',
    poder: 75000000000
  }
  
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
 
  constructor( private dbzService: DbzService) {
  }
}
