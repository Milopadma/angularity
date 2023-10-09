import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyAppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, MyAppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
