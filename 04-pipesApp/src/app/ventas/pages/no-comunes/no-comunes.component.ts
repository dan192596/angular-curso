import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

//KeyValuePipe
interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string[] = ['Fernando', 'Maria'];
  genero: string = 'masculino';
  indexNombre: number = 0;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] =['Daniel', 'Joel', 'Maria', 'Pedro', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos nigun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente():void{
    switch (this.genero) {
      case 'masculino':
        this.genero = 'femenino';
        this.indexNombre =1;
        break;
      case 'femenino':
        this.genero = 'masculino';
        this.indexNombre = 0;
        break;    
    }
  }

  borrarCliente():void{
    this.clientes.pop()
  }

  persona: Persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }


  //JsonPipe
  heroes = [
   {
    nombre:'Superman',
    vuela:true
  },
  {
    nombre:'Robin',
    vuela:false
  },
  {
    nombre:'Aquaman',
    vuela:false
  }
  ]


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500)
  })
}
