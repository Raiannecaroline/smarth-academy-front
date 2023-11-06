import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('NavComponent');
  }

  sidenavOpen = false;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

}
