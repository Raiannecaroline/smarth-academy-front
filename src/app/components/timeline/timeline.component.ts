import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  option!: EChartsOption;

  constructor() { }

  ngOnInit(): void {
  }


  options: EChartsOption = {
    color: ['#3398DB', '#FF0000'],
    title: {
      text: 'Fluxo'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Horários', 'Pessoas']
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
      boundaryGap: false,
      data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    },
    yAxis: {
      type: 'value',
      min: 0,
      interval: 50,
      max: 150

    },
    series: [

      {
        name: 'Horários',
        type: 'line',
        stack: 'Total',
        data: [18, 19, 20, 22, 19, 18]
      },
      {
        name: 'Pessoas',
        type: 'line',
        stack: 'Total',
        data: [30, 50, 57, 82, 110, 66]
      },
    ]
  };


}
