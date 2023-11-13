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
  options!: EChartsOption;

  option: EChartsOption = {
    tooltip: {},
    legend: {},
    series: [
      {
        name: 'Fluxo',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: []
      }
    ]
  };


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
        // console.log(this.aparelho);
      },
    );
  }

  initData() {
    this.option.angleAxis = [];
    this.aparelho.forEach((item) => {
      this.aparelho.push({
        angleAxis: item.id,
        radiusAxis: item.id,
        series: [
          {
            type: 'pie',
            data: [
              { value: item.id, name: 'Fluxo' },
            ]
          }
        ]
      } as any);
    });
  }


}
