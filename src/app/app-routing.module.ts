import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chats/chat/chat.component';
import { CanActivateComponentGuard } from './guards/can-activate-component.guard';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { ListadoComponent } from './componentes/listado/listado.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path: 'chat', component: ChatComponent, canActivate: [CanActivateComponentGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'listados', component: ListadoComponent },
  { path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
