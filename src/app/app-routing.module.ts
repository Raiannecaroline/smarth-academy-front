import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AparelhosComponent } from './components/aparelhos/aparelhos.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { TreinosComponent } from './components/treinos/treinos.component';
import { DetalhesAparelhosComponent } from './components/detalhes-aparelhos/detalhes-aparelhos.component';
import { DetalhesEspecialistasComponent } from './components/detalhes-especialistas/detalhes-especialistas.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'aparelhos',
    component: AparelhosComponent
  },
  {
    path: 'aparelhos',
    component: TreinosComponent
  },
  {
    path: 'aparelhos',
    component: ParceirosComponent
  },
  {
    path: 'detalhes-aparelhos',
    component: DetalhesAparelhosComponent
  },
  {
    path: 'detalhes-especialistas',
    component: DetalhesEspecialistasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
