import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authentication: AngularFireAuth) { }

  async login( mail: string, pass:string){

    return await this.authentication.signInWithEmailAndPassword(mail, pass);
  }

  // async loginWithGoogle(mail: string, pass: string) {
  //   try {
  //     return await this.authentication.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   } catch (err) {
  //     console.log("error google: ", err);
  //     return null;
  //   }
  // }

    async register( mail: string, pass:string){

      return await this.authentication.createUserWithEmailAndPassword(mail, pass);
    }

    getUserLogueado(){
      return this.authentication.authState;
    }

    desloguear(){
this.authentication.signOut();
console.log("logout");

    }
}
