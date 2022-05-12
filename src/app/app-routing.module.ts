import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { MenuComponent } from './page/menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { RegistroComponent } from './page/registro/registro.component';
import { AhorcadoComponent } from './page/juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './page/juegos/mayormenor/mayormenor.component';
import { ForoComponent } from './page/foro/foro.component';

const routes: Routes = [

  {
    path:'', pathMatch:'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { 
        path: 'about', component:AboutComponent
      },
      {
        path: 'juegos', component:JuegosComponent,
        children: [
          {path: 'ahorcado', component:AhorcadoComponent},
          {path: 'preguntados', component:PreguntadosComponent}
        ]
      },
      {
        path: 'foro', component:ForoComponent
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'ahorcado', component: AhorcadoComponent
  },
  {
    path: 'preguntados', component: PreguntadosComponent
  },
  {
    path: 'mayormenor', component: MayormenorComponent
  },
  {
    path: 'juegos', component:JuegosComponent,
  },
  {
    path: '**', component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
