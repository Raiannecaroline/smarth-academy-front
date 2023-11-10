import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css'],
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
export class AparelhosComponent implements OnInit {

  searchOpen = 'closed';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearch() {
    this.searchOpen = this.searchOpen === 'closed' ? 'open' : 'closed';
  }

}
