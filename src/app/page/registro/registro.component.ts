import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

//user: Usuario =  new Usuario();

usuario = {
  mail : '',
  password: ''
}
  constructor(private authService : LoginService) { }

  ngOnInit(): void {
  }


  Registrarse(){
    const {mail, password} = this.usuario;
    try{
console.log(this.usuario);

    this.authService.register (mail, password).then( res=>{
          console.log("registro de usuario ok",res);
        })
        
      }
    catch{
      console.log("hay error");
      
    }
  }

}
