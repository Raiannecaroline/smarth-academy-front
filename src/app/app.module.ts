import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FluxoPessoasComponent } from './components/fluxo-pessoas/fluxo-pessoas.component';
import { AparelhosHomeComponent } from './components/aparelhos-home/aparelhos-home.component';
import { NavComponent } from './components/nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    FluxoPessoasComponent,
    AparelhosHomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
