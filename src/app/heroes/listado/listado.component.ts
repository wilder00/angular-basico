import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  deletedHeros: string[]=[];
  deleted: boolean = false;
  borrarHeroe ():void{
    console.log('Borrando');
    let heroD = this.heroes.pop();
    
    this.deleted = heroD == undefined? false:true;
    heroD? this.deletedHeros.push(heroD): heroD;
  }
}
