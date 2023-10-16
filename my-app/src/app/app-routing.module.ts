import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: MainComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MyAppRoutingModule {}
