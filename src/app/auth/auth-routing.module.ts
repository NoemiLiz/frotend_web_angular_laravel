import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//aqui automaticamente se importa la ruta de login y register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //aqui configurar las rutas de los componentes no independientes que estan dentro de la carpeta auth/  : login y register
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
