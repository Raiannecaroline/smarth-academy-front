import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { FluxoPessoasService } from 'src/app/service/fluxo-pessoas.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  option!: EChartsOption;

  constructor(
    private fluxoPessoasService: FluxoPessoasService,
  ) { }

  ngOnInit(): void {
    this.initData();
  }


  options: EChartsOption = {
    color: ['#3398DB', '#FF0000'],
    title: {
      text: 'Fluxo'
    },
    tooltip: {},
    legend: {
      data: ['Fluxo', 'Pessoas']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    series: [
      {  type: 'line' },
      { type: 'line',},
    ]
  };

  mergeOptions!: EChartsOption;

  private initData() {
    this.getPessoasId();
  };

  getPessoasId() {
    this.fluxoPessoasService.getFluxoPessoasId().subscribe(
      (data: any) => {
        this.options.xAxis = {
          type: 'category',
          data: data
        }
        this.getPessoasId();
      }
    )
  }

}
