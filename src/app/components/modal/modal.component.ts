import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as echarts from 'echarts';
import { Aparelhos } from 'src/app/models/aparelhos.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  @Input() aparelho: Aparelhos[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  closeModal() {
    this.close.emit();
  }

  options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    },
    yAxis: {
      type: 'value'
    },
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
            value: 5,
            itemStyle: {
              color: '#FFF000'
            }
          },
          {
            value: 4,
            itemStyle: {
              color: '#008000'
            }
          },
        ],
        type: 'bar'
      }
    ]
  };

}
