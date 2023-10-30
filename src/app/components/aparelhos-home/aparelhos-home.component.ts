import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-aparelhos-home',
  templateUrl: './aparelhos-home.component.html',
  styleUrls: ['./aparelhos-home.component.css']
})
export class AparelhosHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('AparelhosHomeComponent');
  }

}
