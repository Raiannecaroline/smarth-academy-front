import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aparelhos } from '../models/aparelhos.models';

const baseUrl = 'http://25.38.142.101:8022/equip'

@Injectable({
  providedIn: 'root'
})
export class AparelhosService {

  constructor(
    private http: HttpClient,
  ) { }


  public getAparelhosId(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${baseUrl}/${id}`);
  }

}
