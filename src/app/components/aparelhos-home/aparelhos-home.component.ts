import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
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
  chartOptions!: EChartsOption;

  constructor(
    private aparelhosService: AparelhosService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAparelhos(1);
    this.updateChart();
  }

  // getAparelhos(id: number) {
  //   this.aparelhosService.getAparelhosId(id).subscribe(
  //     (data: Aparelhos) => {
  //       this.aparelho = [data];
  //       console.log(this.aparelho);
  //     },
  //   );
  // }

  getAparelhos(id: number) {
    this.aparelhosService.getAparelhosId(id).subscribe((data: Aparelhos) => {
      this.aparelho = [data];
      this.updateChart();
      console.log(this.aparelho);
    });
  }

  updateChart() {
    this.chartOptions = {
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }

}
