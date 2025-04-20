import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //injeccion de dependencias
  urlBase ="http://127.0.0.1:8000/api";
  http = inject(HttpClient);

  constructor(/*private http:HttpClient*/) {}

  listar() {
    return this.http.get(`${this.urlBase}/usuario`);
  }
  guardar(datos:any) {
    return this.http.post(`${this.urlBase}/usuario`,datos);
  }
  mostrar(id:number) {
    return this.http.get(`${this.urlBase}/usuario/${id}`);
  }
  modificar(id:number, datos:any) {
    return this.http.put(`${this.urlBase}/usuario/${id}`,datos);
  }
  eliminar(id:number) {
    return this.http.delete(`${this.urlBase}/api/usuario/${id}`);
  }
}