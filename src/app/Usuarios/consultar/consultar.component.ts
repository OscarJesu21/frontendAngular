import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServicioService} from '../../Servicio/servicio.service'
import { Usuarios } from 'src/app/Modelo/Usuarios';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  usuarios:Usuarios[];
  constructor(private service:ServicioService, private router:Router) { }

  ngOnInit(): void {

    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })

  }

}
