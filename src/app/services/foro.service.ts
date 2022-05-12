import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ForoComponent } from '../page/foro/foro.component';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private firebase : AngularFirestore) { }

  getPosts() {
    return this.firebase
            .collection("posts")
            .snapshotChanges()
  }

  createPost(post: ForoComponent) {
    return new Promise<any> ( (resolve, reject) => {
          this.firebase
              .collection("posts")
              .add(post)
              .then( (response) => {
                 console.log(response) 
              },
              (error) => {
                reject(error)
              })
    })
  }
}
