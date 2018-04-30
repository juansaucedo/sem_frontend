import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MainComponent} from '../main/main.component';
import {Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RoutesModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }
