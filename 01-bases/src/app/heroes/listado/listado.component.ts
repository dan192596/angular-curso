import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroeBorrado:string = '';

  public heroes: string[] = [
    'Spiderman', 
    'Ironman',
    'Hulk', 
    'Thor',
    'Capitan america'
  ];

  public borrarHeroe(/* index:number */):void{    
    this.heroeBorrado =  this.heroes.shift()||'';
  }

}
