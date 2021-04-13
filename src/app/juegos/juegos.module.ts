import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';



@NgModule({
  declarations: [MenuJuegosComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
