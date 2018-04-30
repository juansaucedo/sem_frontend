import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopnavComponent } from './common/topnav/topnav.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
