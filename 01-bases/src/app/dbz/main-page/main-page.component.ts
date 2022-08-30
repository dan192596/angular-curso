import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  public personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];

  public nuevo:Personaje ={
    nombre:'',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje){
    debugger;
    this.personajes.push(argumento)
  }
}
