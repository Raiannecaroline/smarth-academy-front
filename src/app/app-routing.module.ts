import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AparelhosComponent } from './components/aparelhos/aparelhos.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { TreinosComponent } from './components/treinos/treinos.component';

const routes: Routes = [
  {
    path: 'login',
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
    path: '',
    component: TreinosComponent
  },
  {
    path: '',
    component: ParceirosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
