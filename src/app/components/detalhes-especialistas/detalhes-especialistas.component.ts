import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-especialistas',
  templateUrl: './detalhes-especialistas.component.html',
  styleUrls: ['./detalhes-especialistas.component.css'],
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
export class DetalhesEspecialistasComponent implements OnInit {

  searchOpen = 'closed';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearch() {
    this.searchOpen = this.searchOpen === 'closed' ? 'open' : 'closed';
  }

}
