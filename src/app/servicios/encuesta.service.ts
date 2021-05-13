import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase/app";
import "firebase/database";
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../clases/user';
import { Router } from '@angular/router';
//import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  mail;

  constructor(private afs: AngularFirestore, private authSvc: AuthService, private router: Router) {
    this.getUseMail();
  }


  addEncuesta(encuesta) {
    this.getUseMail();
    return this.afs.collection('encuesta').add({
      user: this.mail,
      pregunta1: encuesta.pregunta1,
      respuesta1: encuesta.respuesta1,
      pregunta2: encuesta.pregunta2,
      respuesta2: encuesta.respuesta2,
      pregunta3: encuesta.pregunta3,
      respuesta3: encuesta.respuesta3,
      nombre: encuesta.nombre,
      apellido: encuesta.apellido,
      edad: encuesta.edad,
      telefono: encuesta.telefono,
      sexo: encuesta.sexo,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  private async getUseMail() {
    if (await this.authSvc.getUsuario()) {
      this.mail = (await this.authSvc.getUsuario()).email;
    } else {
      this.mail = "usuario anonimo";
    }
  }

}
