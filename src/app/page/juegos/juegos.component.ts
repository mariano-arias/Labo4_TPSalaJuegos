import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public ruteo : Router) { }

  ngOnInit(): void {
  }

  ToAhorcado() {
    this.ruteo.navigateByUrl('/ahorcado');
  }

  ToPreguntados() {
    this.ruteo.navigateByUrl('/preguntados');
  }

  ToMayorMenor() {
    this.ruteo.navigateByUrl('/mayormenor');
  }
}
