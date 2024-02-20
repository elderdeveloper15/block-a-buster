import { Component, inject, OnInit } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  isButtonDisabled: boolean = false;
  showButton: boolean = true;
  counter: number = 3;
  timerSubscription!: Subscription;

  textos: string[] = ['Texto 1', 'Texto 2', 'Texto 3', 'Texto 4', 'Texto 5'];
  textoSeleccionado: string = '';


  constructor() {

  }

  

  ngOnInit() {
    
  }

  onButtonClick() {
    this.seleccionarTextoAleatorio();
    this.startTimer();
    this.isButtonDisabled = true;
    this.showButton = false;
  }

  seleccionarTextoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * this.textos.length);
    this.textoSeleccionado = this.textos[indiceAleatorio];
  }
  

  startTimer() {
    const timer$ = timer(0, 1000);
    this.timerSubscription = timer$.subscribe((_) => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.timerSubscription.unsubscribe();
        this.isButtonDisabled = false;
        this.showButton = true;
      }
    });
  }

  resetTimer() {
    this.counter = 3;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.startTimer();
  }
  
}
