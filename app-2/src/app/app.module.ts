import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
