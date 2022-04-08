import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( public ruteo : Router) {
   }


  title = 'Laboratorio IV 2022';

  nombre : string="";
  clave: string = "";

  user = new Usuario();
  Redirigir(){
    this.ruteo.navigateByUrl('home');
}
}
