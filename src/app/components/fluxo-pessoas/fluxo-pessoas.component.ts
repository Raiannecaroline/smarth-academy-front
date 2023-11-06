import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluxo-pessoas',
  templateUrl: './fluxo-pessoas.component.html',
  styleUrls: ['./fluxo-pessoas.component.scss']
})
export class FluxoPessoasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('FluxoPessoasComponent');
  }

}
