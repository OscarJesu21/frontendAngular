import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../Modelo/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  Url: 'http://localhost:8081/AppWeb/usuarios';

  getUsuarios(){
    return this.http.get<Usuarios[]>(this.Url);
  }
}
