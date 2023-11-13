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
    this.initData();
  }


  options: EChartsOption = {
    color: ['#3398DB', '#FF0000'],
    title: {
      text: 'Fluxo'
    },
    tooltip: {},
    legend: {},
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
    this.mergeOptions = {
      series: [
        {
          data: [
            {
              value: 2,
              itemStyle: {
                color: '#008000'
              }
            },
            {
              value: 8,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 6,
              itemStyle: {
                color: '#FFF000'
              }
            },
            {
              value: 7,
              itemStyle: {
                color: '#a90000'
              }
            },
            {
              value: 8,
              itemStyle: {
                color: '#008000'
              }
            },
            {
              value: 2,
              itemStyle: {
                color: '#008000'
              }
            },
          ]
        },
      ]
    };
  };

}
