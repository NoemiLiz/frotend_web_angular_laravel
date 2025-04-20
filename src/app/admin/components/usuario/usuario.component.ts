import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuarioService = inject(UsuarioService);
  //variable

  usuarios: any[]=[]

  usuarioForm = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    password: new FormControl('')
  });

//aqui se declaran las funciones y variables que se van a utilizar en el componente
  constructor(){

    this.getUsuarios();
  }

/// esta es la funcion que se encarga de listar los usuarios
  getUsuarios(){
    this.usuarioService.listar().subscribe(
      (respuesta:any)=>{
        console.log(respuesta);
        this.usuarios = respuesta;
      },
      (error)=>{

      }
    );
  }
  /// esta es la funcion que se encarga de guardar los usuarios
  funGuardarUsuario(){
    this.usuarioService.guardar(this.usuarioForm.value).subscribe(
    (respuesta:any)=>{
      console.log(respuesta);

      //con esto se actualiza la lista de usuarios
      this.getUsuarios();

      //con esto limpiamos el formulario
      this.usuarioForm.reset();
    },
    (error)=>{

    }
  );
  }

}
