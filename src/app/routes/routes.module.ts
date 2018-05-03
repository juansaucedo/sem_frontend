import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from '../main/main.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }
