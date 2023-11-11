import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FluxoPessoas } from 'src/app/models/fluxo-pessoas.models';
import { FluxoPessoasService } from 'src/app/service/fluxo-pessoas.service';
// import { FluxoPessoas } from 'src/app/models/fluxo-pessoas.models';

@Component({
  selector: 'app-fluxo-pessoas',
  templateUrl: './fluxo-pessoas.component.html',
  styleUrls: ['./fluxo-pessoas.component.css']
})

export class FluxoPessoasComponent implements OnInit {

  fluxo: FluxoPessoas | undefined;

  constructor(
    private fluxoService: FluxoPessoasService,
  ) { }

  ngOnInit(): void {
    this.getFluxoPessoas();
  }

  getFluxoPessoas(): void {
    this.fluxoService.getFluxoPessoasId()
    .subscribe(
      data => {
        this.fluxo = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
