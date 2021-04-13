import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoTestComponent } from './memo-test/memo-test.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './tateti/tateti.component';


const routes: Routes = [{
  path: 'tateti',
  component: TatetiComponent
},
{
  path: 'piedrapapeltijera',
  component: PiedraPapelTijeraComponent
},
{
  path: 'memotest',
  component: MemoTestComponent
},
{
  path: 'mijuego',
  component: MiJuegoComponent
},
{
  path: 'juegos',
  component: MenuJuegosComponent
},
{
  path: '',
  redirectTo: 'juegos',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
