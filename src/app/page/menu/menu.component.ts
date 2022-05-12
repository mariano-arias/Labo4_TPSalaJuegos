import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogueado = this.loginService.getUserLogueado();

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }
  desloguear(){
    this.loginService.desloguear();
  }
}
