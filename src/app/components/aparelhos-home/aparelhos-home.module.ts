import { AparelhosHomeComponent } from './aparelhos-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AparelhosHomeComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    AparelhosHomeComponent,
  ]
})

export class AparelhosHomeModule {

}
