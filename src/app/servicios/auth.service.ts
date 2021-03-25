import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/firebase-auth'
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';
import User from "firebase"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user : firebase.User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string,password: string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async registro(email: string,password: string){
try {
  const result = await this.afAuth.createUserWithEmailAndPassword(
    email,
    password
  );

  return result;
} catch (error) {
  console.log(error);
}
 
  }
  async logout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
    
  }
  getUsuario(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
