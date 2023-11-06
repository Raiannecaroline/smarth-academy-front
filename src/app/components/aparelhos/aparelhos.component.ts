import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.scss']
})
export class AparelhosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('AparelhosComponent');
  }

}
