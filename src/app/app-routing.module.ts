import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { MenuComponent } from './page/menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { RegistroComponent } from './page/registro/registro.component';

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
          {path: 'tateti', component:TatetiComponent},
          {path: 'preguntados', component:PreguntadosComponent}
        ]
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
  // {
  //   path: 'about', component: AboutComponent
  // },
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
