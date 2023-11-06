import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aparelhos-home',
  templateUrl: './aparelhos-home.component.html',
  styleUrls: ['./aparelhos-home.component.scss']
})
export class AparelhosHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('AparelhosHomeComponent');
  }

}
