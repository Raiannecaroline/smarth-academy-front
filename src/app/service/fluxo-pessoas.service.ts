import { FluxoPessoas } from 'src/app/models/fluxo-pessoas.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { FluxoPessoas } from '../models/fluxo-pessoas.models';

const baseUrl = 'http://localhost:8022/fluxo'

@Injectable({
  providedIn: 'root'
})
export class FluxoPessoasService {

  constructor(
    private http: HttpClient,
  ) { }


  getFluxoPessoasId(): Observable<FluxoPessoas> {
    return this.http.get<FluxoPessoas>(`${baseUrl}/`);
  }

}
