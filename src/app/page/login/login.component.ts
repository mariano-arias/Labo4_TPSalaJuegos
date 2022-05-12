import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Laboratorio IV 2022';

  
  usuario = {
    mail : '',
    password: ''
  }

  constructor( public ruteo : Router, private authService : LoginService) {
   }


  Ingresar(){
    console.log(this.usuario);

    const {mail, password} = this.usuario;
    try{

    this.authService.login (mail, password).then( res=>{
          console.log("entroooo",res);
        });
        this.Redirigir();
        
      }
    catch{
      console.log("hay error");
      
    }
  }

  Redirigir(){
    this.ruteo.navigateByUrl('home');
}
}
