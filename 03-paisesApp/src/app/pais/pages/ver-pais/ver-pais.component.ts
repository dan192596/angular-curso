import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activadedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activadedRoute.params
      .pipe(
        switchMap((param)=> this.paisService.getPaisPorCodigo(param['id']))
      )
      .subscribe(resp=>{
        console.log(resp);
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
