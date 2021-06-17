import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
  //qué contendrá el módulo  
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  //qué componentes se van a usar en el exterior
  exports: [
    ListadoComponent
  ],
  //Modulos que se usarán
  imports: [
    CommonModule //para usar ngIf, ngFor
  ]
})

export class HeroesModule{}