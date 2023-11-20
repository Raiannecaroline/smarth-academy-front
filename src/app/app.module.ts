import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FluxoPessoasComponent } from './components/fluxo-pessoas/fluxo-pessoas.component';
import { NavComponent } from './components/nav/nav.component';
import { AparelhosComponent } from './components/aparelhos/aparelhos.component';
import { TreinosComponent } from './components/treinos/treinos.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesAparelhosComponent } from './components/detalhes-aparelhos/detalhes-aparelhos.component';
import { DetalhesEspecialistasComponent } from './components/detalhes-especialistas/detalhes-especialistas.component';
import { ModalModule } from './components/modal/modal.module';
import { AparelhosHomeModule } from './components/aparelhos-home/aparelhos-home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TimelineComponent,
    FluxoPessoasComponent,
    NavComponent,
    AparelhosComponent,
    TreinosComponent,
    ParceirosComponent,
    DetalhesAparelhosComponent,
    DetalhesEspecialistasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ModalModule,
    AparelhosHomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
