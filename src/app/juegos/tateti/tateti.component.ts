import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/clases/lista';
import { ListadoService } from 'src/app/servicios/listado.service';
import { Tateti } from '../clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  clase1: string;
  clase2: string;
  clase3: string;
  clase4: string;
  clase5: string;
  clase6: string;
  clase7: string;
  clase8: string;
  clase9: string;
  juego: Tateti;
  mensaje: string;
  claseContainer: string;
  claseMensaje: string;
  cellElements: any;
  listaclases: Array<string>;
  ocultarVerificar: boolean;
  clasesCuadritos: Array<string>;
  resultado: Lista;
  constructor(private listado: ListadoService) {
    this.juego = new Tateti();
    this.nuevoJuego();
    this.clasesCuadritos = [this.clase1,
    this.clase2,
    this.clase3,
    this.clase4,
    this.clase5,
    this.clase6,
    this.clase4,
    this.clase8,
    this.clase9]

  }

  ngOnInit(): void {

    this.CuadraditoHover();
    this.cellElements = document.querySelectorAll('[data-cell]');


  }

  Jugar(cuadradito: number) {

    this.MarcarJugada(cuadradito);
    this.juego.claseActual = this.juego.turnoCirculo ? this.juego.o : this.juego.x;
    if (this.VerificarJugada()) {

      this.FinalizarJuego(false);

    }
    if (this.EsEmpate()) {

      this.FinalizarJuego(true);

    }

    this.juego.CambiarTurno();
    this.CuadraditoHover();
    // this.juego.CambiarTurno();

  }

  CuadraditoHover() {

    if (this.juego.turnoCirculo) {
      this.claseContainer = this.juego.o;

    } else {
      this.claseContainer = this.juego.x;
    }

  }


  FinalizarJuego(empate) {
    if (empate) {
      this.mensaje = 'Empate!'
    } else {

      this.mensaje = this.juego.turnoCirculo ? "O Gano" : "X " + 'Gano';

    }
    this.resultado = {
      "tiempo": "n/a",
      "resultado": this.mensaje,
      "clicks": "n/a",
      "juego": "TaTeTi",
    }
    this.listado.addResultado(this.resultado);
    this.claseMensaje = 'show';
    this.ocultarVerificar = true;
  }

  VerificarJugada() {

    return this.juego.combinaciones.some(conbinacion => {
      return conbinacion.every(index => {

        return this.listaclases[index] == this.juego.claseActual.toString();
      })
    })


  }


  EsEmpate() {
    return [...this.listaclases].every(cell => {
      return cell == this.juego.o || cell == this.juego.x;

    })
    /* this.juego.o : this.juego.x
       let i = 0;
       this.listaclases.forEach(element => {
         if (element == this.juego.x || element == this.juego.o) {
           i++;
   
         }
       });
   
       if (i == 9) {
         return true;
       }
       return false;
   
       /*
           return this.listaclases.every(cell => {
       
             return cell == this.juego.x || cell == this.juego.o;
           })
           */


  }

  MarcarJugada(cuadradito: number) {

    let clase = this.juego.turnoCirculo ? this.juego.o : this.juego.x;

    switch (cuadradito) {
      case 0:
        if (this.clase1 == null || this.clase1 == "") {

          this.clase1 = clase;
          this.listaclases[cuadradito] = clase;
        }

        break;
      case 1:
        if (this.clase2 == null || this.clase2 == "") {

          this.clase2 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 2:
        if (this.clase3 == null || this.clase3 == "") {
          this.clase3 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 3:
        if (this.clase4 == null || this.clase4 == "") {
          this.clase4 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 4:
        if (this.clase5 == null || this.clase5 == "") {
          this.clase5 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 5:
        if (this.clase6 == null || this.clase6 == "") {
          this.clase6 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 6:
        if (this.clase7 == null || this.clase7 == "") {
          this.clase7 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 7:
        if (this.clase8 == null || this.clase8 == "") {
          this.clase8 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      case 8:
        if (this.clase9 == null || this.clase9 == "") {
          this.clase9 = clase;
          this.listaclases[cuadradito] = clase;
        }
        break;
      default:
        break;
    }

  }

  nuevoJuego() {
    this.ocultarVerificar = false;
    this.claseMensaje = '';
    this.listaclases = [null, null, null, null, null, null, null, null, null];
    this.ocultarVerificar = false;
    this.mensaje = " ninguno";
    this.clase1 = "";
    this.clase2 = "";
    this.clase3 = "";
    this.clase4 = "";
    this.clase5 = "";
    this.clase6 = "";
    this.clase7 = "";
    this.clase8 = "";
    this.clase9 = "";


  }
}
