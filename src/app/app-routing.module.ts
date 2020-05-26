import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './Usuarios/consultar/consultar.component';
import { EliminarComponent } from './Usuarios/eliminar/eliminar.component';
import { RegistrarComponent } from './Usuarios/registrar/registrar.component';
import { ActualizarComponent } from './Usuarios/actualizar/actualizar.component';


const routes: Routes = [
  {path: 'consultar', component:ConsultarComponent},
  {path: 'eliminar', component:EliminarComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'actualizar', component:ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
