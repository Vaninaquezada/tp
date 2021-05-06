import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PiedraPapelTijeraComponent } from './juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemoTestComponent } from './juegos/memo-test/memo-test.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { MiJuegoComponent } from './juegos/mi-juego/mi-juego.component';
import { JuegosModule } from './juegos/juegos.module';
import { ChatComponent } from './componentes/chats/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './componentes/listado/listado.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    RegistroComponent,
    PiedraPapelTijeraComponent,
    MemoTestComponent,
    TatetiComponent,
    MiJuegoComponent,
    ChatComponent,
    ListadoComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule,
    BrowserAnimationsModule,
    JuegosModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
