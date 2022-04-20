import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  passwordBis: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  user =  new Usuario();
  Registrarse(){
    if(this.user.password && this.passwordBis){
      return true;
    }else{
      return "algo";
    }
  }
}
