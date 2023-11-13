import { FluxoPessoas } from './../../models/fluxo-pessoas.models';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhes-aparelhos',
  templateUrl: './detalhes-aparelhos.component.html',
  styleUrls: ['./detalhes-aparelhos.component.css'],
  animations: [
    trigger('searchBar', [
      state('closed', style({
        width: '0',
        opacity: '0',
      })),
      state('open', style({
        width: '100%',
        opacity: '1',
      })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class DetalhesAparelhosComponent implements OnInit {

  fluxo!: FluxoPessoas;

  searchOpen = 'closed';
  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearch() {
    this.searchOpen = this.searchOpen === 'closed' ? 'open' : 'closed';
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
