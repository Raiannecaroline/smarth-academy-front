import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FluxoPessoasComponent } from './components/fluxo-pessoas/fluxo-pessoas.component';
import { AparelhosHomeComponent } from './components/aparelhos-home/aparelhos-home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { AparelhosComponent } from './components/aparelhos/aparelhos.component';
import { TreinosComponent } from './components/treinos/treinos.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    FluxoPessoasComponent,
    AparelhosHomeComponent,
    NavComponent,
    AparelhosComponent,
    TreinosComponent,
    ParceirosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
