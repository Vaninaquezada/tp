import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/clases/lista';
import { ListadoService } from 'src/app/servicios/listado.service';
import { PiedraPapelTijera } from '../clases/piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  resultado: Lista;
  juego: PiedraPapelTijera;
  jugando: boolean;
  visualizarBoton: boolean;
  constructor(private listado: ListadoService) {

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
    this.resultado = {
      "tiempo": "n/a",
      "resultado": this.juego.mensaje,
      "clicks": "n/a",
      "juego": "Piedra Papel Tjera",
    }
    this.listado.addResultado(this.resultado);

  }

  ngOnInit(): void {
  }

}
