import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//aqui tambien se importa la ruta de perfil y usuario
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  //aqui configurar las rutas de los componentes no independientes que estan dentro de la carpeta admin/ : perfil y usuario
  {
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'usuario',
    component:UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
