import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  treinoMessages: {[key: string]: boolean} = {
    legDay: false,
    superiores: false,
    cardio: false
  };

  toggleTreinoMessage(tipoTreino: string) {
    this.treinoMessages[tipoTreino] = !this.treinoMessages[tipoTreino];
    console.log(this.treinoMessages);
  }

  showTreinoMessage(tipoTreino: string) {
    this.treinoMessages[tipoTreino] = true;
    console.log(this.treinoMessages);
  }

  hideTreinoMessage(tipoTreino: string) {
    this.treinoMessages[tipoTreino] = false;
    console.log(this.treinoMessages);
  }
}
