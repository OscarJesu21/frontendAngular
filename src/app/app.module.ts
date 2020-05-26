import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarComponent } from './Usuarios/consultar/consultar.component';
import { RegistrarComponent } from './Usuarios/registrar/registrar.component';
import { EliminarComponent } from './Usuarios/eliminar/eliminar.component';
import { ActualizarComponent } from './Usuarios/actualizar/actualizar.component';
import{FormsModule} from '@angular/forms';
import{ ServicioService }from '../app/Servicio/servicio.service';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    RegistrarComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
