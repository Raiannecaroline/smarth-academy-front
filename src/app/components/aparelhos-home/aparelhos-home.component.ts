import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';
import { AparelhosService } from 'src/app/service/aparelhos.service';
import { Aparelhos } from 'src/app/models/aparelhos.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aparelhos-home',
  templateUrl: './aparelhos-home.component.html',
  styleUrls: ['./aparelhos-home.component.css']
})

export class AparelhosHomeComponent implements OnInit {

  aparelho: Aparelhos[] = [];

  constructor(
    private aparelhosService: AparelhosService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAparelhos(1);
  }

  getAparelhos(id: number) {
    this.aparelhosService.getAparelhosId(id).subscribe(
      (data: Aparelhos) => {
        this.aparelho = [data];
        console.log(this.aparelho);
      },
    );
  }

}
