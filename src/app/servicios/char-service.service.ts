import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../clases/user';


@Injectable({
  providedIn: 'root'
})
export class CharServiceService {

  public user: Observable<any> = this.authSvc.afAuth.user;

  constructor(private afs: AngularFirestore, private authSvc: AuthService) {

  }

  /*
    addChatMessage(msg) {
      return this.afs.collection('messages').add({
        msg: msg,
        from: this.user.,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
     
    getChatMessages() {
      let users = [];
      return this.getUsers().pipe(
        switchMap(res => {
          users = res;
          return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
        }),
        map(messages => {
          // Get the real name for each user
          for (let m of messages) {          
            m.fromName = this.getUserForMsg(m.from, users);
            m.myMsg = this.getUsuario().uid === m.from;
          }        
          return messages
        })
      )
    }
     
    private getUsers() {
      return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
    }
     
    private getUserForMsg(msgFromId, users: User[]): string {    
      for (let usr of users) {
        if (usr.uid == msgFromId) {
          return usr.email;
        }
      }
      return 'Deleted';
    }
  
  
  */


  /*   get(chatId) {
     return this.afs
       .collection<any>('chats')
       .doc(chatId)
       .snapshotChanges()
       .pipe(
         map(doc => {
           return { id: doc.payload.id, ...doc.payload.data() };
         })
       );
   }
 
   async create() {
     const { uid } = await this.auth.getUsuario();
 
     const data = {
       uid,
       createdAt: Date.now(),
       count: 0,
       messages: []
     };
 
     const docRef = await this.afs.collection('chats').add(data);
 
     return this.router.navigate(['chats', docRef.id]);
   }
 
   async sendMessage(chatId, content) {
     const { uid } = await this.auth.getUsuario();
 
     const data = {
       uid,
       content,
       createdAt: Date.now()
     };
 
     if (uid) {
       const ref = this.afs.collection('chats').doc(chatId);
       return ref.update({
         messages: firestore.Field.arrayUnion(data)
 
       });
     }
   }
 */

}
