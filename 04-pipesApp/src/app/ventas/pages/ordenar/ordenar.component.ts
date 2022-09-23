import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.intefaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isMayuscula: boolean = false;
  ordenarPor: string = '';

  heroes: Heroe[] =[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman', 
      vuela: false,
      color: Color.negro
    },{
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil', 
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde', 
      vuela: true,
      color: Color.verde
    }
  ];

  ngOnInit(): void {
  }

  cambiarLetra(){
    this.isMayuscula = !this.isMayuscula;
  }

  cambiarOrden(valor:string){
    console.log('cambio')
    this.ordenarPor = valor;
  }
}
