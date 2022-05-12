import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './page/menu/menu.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { RegistroComponent } from './page/registro/registro.component';
import { AhorcadoComponent } from './page/juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './page/juegos/mayormenor/mayormenor.component';
import { ForoComponent } from './page/foro/foro.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import { ForoPostComponent } from './page/foro-post/foro-post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    JuegosComponent,
    NotFoundComponent,
    PreguntadosComponent,
    HomeComponent,
    AboutComponent,
    RegistroComponent,
    AhorcadoComponent,
    MayormenorComponent,
    ForoComponent,
    ForoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
