import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/clases/lista';
import { ImageService } from 'src/app/servicios/image.service';
import { ListadoService } from 'src/app/servicios/listado.service';


@Component({
  selector: 'app-memo-test',
  templateUrl: './memo-test.component.html',
  styleUrls: ['./memo-test.component.css']
})
export class MemoTestComponent implements OnInit {

  totalClicks: number = 0;
  timeRemaining: number;
  cardToCheck;
  matchedCards = [];
  busy: boolean;
  totalTime: number;
  countdown;
  cardsArray = [];
  timer;
  ticker;
  victoria: string;
  juegoTerminado: string;
  start: string;
  sinClase: string;
  claseVisible: string;
  img;
  img2;
  resultado: Lista;

  constructor(private svcImg: ImageService, private listado: ListadoService) {
    this.claseVisible = "visible";
    this.sinClase = "";
    this.start = "visible";
    setTimeout(() => {
      this.inicializarArray();
      // this.ready();
    }, 1000);

  }

  ngOnInit(): void {
    this.svcImg.getImg().subscribe((data) => {
      this.img = data;
      this.getImg(this.img.hits);
    });
  }

  //evento click envia un indice y un boleano 

  MixOrMatch(totalTime) {

    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = 100;
    this.ticker = 0;
    this.victoria = "";
    this.juegoTerminado = "";

    this.inicializarArray();
  }


  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;

    setTimeout(() => {

      this.shuffleCards(this.cardsArray);
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500)
    this.hideCards();
    this.timer = this.timeRemaining;
    this.ticker = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer = this.timeRemaining;
      if (this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);

    this.juegoTerminado = "visible";

    this.resultado = {
      "tiempo": "100 seg",
      "resultado": "Perdio",
      "clicks": this.ticker,
      "juego": "Memotest",
    }
    this.listado.addResultado(this.resultado);
  }
  victory() {

    this.resultado = {
      "tiempo": this.timer + " seg",
      "resultado": "Ganaste",
      "clicks": this.ticker,
      "juego": "Memotest",
    }
    this.listado.addResultado(this.resultado);
    clearInterval(this.countdown);
    this.victoria = "visible";
  }
  hideCards() {
    this.cardsArray.forEach(card => {
      card.visible = false;
      card.macheada = false;

    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.totalClicks++;
      this.ticker = this.totalClicks;

      this.cardsArray[card.tarjeta].visible = true;

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else
      this.cardMismatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {

    this.matchedCards.push(card1.tarjeta);
    this.matchedCards.push(card2.tarjeta);

    this.cardsArray[card1.tarjeta].macheada = true;
    this.cardsArray[card2.tarjeta].macheada = true;

    if (this.matchedCards.length === this.cardsArray.length)
      this.victory();
  }

  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      this.cardsArray[card1.tarjeta].visible = false;
      this.cardsArray[card2.tarjeta].visible = false;
      this.busy = false;
    }, 1000);
  }
  shuffleCards(array) { // Fisher-Yates Shuffle Algorithm.
    for (let i = array.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      let aux;
      aux = array[randIndex];
      array[randIndex] = array[i];
      array[i] = aux;
    }
    this.cardsArray = array;
  }
  getCardType(card) {
    return card.img;
  }
  canFlipCard(card) {
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }

  ready() {
    this.MixOrMatch(100);
    this.start = "";
    this.victoria = "";
    this.juegoTerminado = "";
    this.startGame();
  }

  inicializarArray() {

    for (let index = 0; index < 6; index++) {

      this.cardsArray[index] = { "tarjeta": index, "visible": false, "macheada": false, "img": this.img2[index].largeImageURL }
      this.cardsArray[index + 6] = { "tarjeta": index + 6, "visible": false, "macheada": false, "img": this.img2[index].largeImageURL }

    }
  }
  onClick(card) {

    this.flipCard(card);
  }

  async getImg(imagen) {
    this.img2 = imagen;
  }
}
