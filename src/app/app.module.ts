import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    JuegosComponent,
    NotFoundComponent,
    PreguntadosComponent,
    TatetiComponent,
    HomeComponent,
    AboutComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
