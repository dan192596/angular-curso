import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activadedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activadedRoute.params
      .pipe(
        switchMap(({id})=> this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe((pais:Country[])=>{
        pais.forEach((pais_element:Country) => {
          this.pais=pais_element;
        });
      })

    // this.activadedRoute.params
    // .subscribe(({id}) =>{
    //   this.paisService.getPaisPorCodigo(id)
    //     .subscribe(
    //       pais =>{
    //         console.log(pais);
    //       }
    //     )
    //   console.log(id);
    // })
  }

}
