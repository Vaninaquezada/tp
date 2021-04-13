import { Component, OnInit } from '@angular/core';
import { PiedraPapelTijera } from '../clases/piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juego: PiedraPapelTijera;
  jugando: boolean;
  visualizarBoton: boolean;
  constructor() {

    this.juego = new PiedraPapelTijera();
    this.jugando = false;
    this.visualizarBoton = false;
  }

  ClickIntro() {

    this.jugando = true;
    this.NuevoJuego();
    this.juego.mensaje = "";
  }

  NuevoJuego() {
    this.juego.NuevoJuevo();
    this.visualizarBoton = false;

  }

  Verificar(seleccion: string) {
    this.juego.seleccionJugador = seleccion;
    this.juego.verificar();

    this.visualizarBoton = true;

  }

  ngOnInit(): void {
  }

}
