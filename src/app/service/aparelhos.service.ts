import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aparelhos } from '../models/aparelhos.models';

const baseUrl = 'http://icaroaurich.dyndns.org:8022/equip'

@Injectable({
  providedIn: 'root'
})
export class AparelhosService {

  constructor(
    private http: HttpClient,
  ) { }


  public getAparelhosId(id: number): Observable<Aparelhos> {
    return this.http.get<Aparelhos>(`${baseUrl}/${id}`);
  }

}
