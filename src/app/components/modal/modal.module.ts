import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalModule {

}
