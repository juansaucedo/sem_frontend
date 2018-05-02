import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from '../main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
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
