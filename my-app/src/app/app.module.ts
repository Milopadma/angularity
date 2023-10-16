import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyAppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, MyAppRoutingModule, MainComponent, HeaderComponent, NgbdCarouselBasic],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
