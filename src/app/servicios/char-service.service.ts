import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import * as firebase from 'firebase/app'; 
import firebase from "firebase/app";
import "firebase/database";
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../clases/user';
import { Router } from '@angular/router';
import { Message } from '../clases/message';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class CharServiceService {
  public user$: Observable<User> = this.authSvc.afAuth.user;
  mail;
  //public user: Observable<any> = this.authSvc.afAuth.user;

  constructor(private afs: AngularFirestore, private authSvc: AuthService, private router: Router) {
    this.getUseMail();
  }


  addChatMessage(msg) {
    this.getUseMail();
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.mail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getChatMessages() {
    let users = [];
    this.getUseMail();
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('messages', ref => ref.orderBy('createdAt', 'desc')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.mail === m.from;
        }
        return messages
      })
    )
  }

  private getUsers() {
    return this.afs.collection('user').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }
  private async getUseMail() {
    if (await this.authSvc.getUsuario()) {
      this.mail = (await this.authSvc.getUsuario()).email;
    } else {
      this.mail = "usuario anonimo";
    }
  }
  private getUserForMsg(msgFromId, users: User[]): string {
    //   console.log("users", users);
    this.getUseMail();
    for (let usr of users) {

      if (usr.email == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }

}
