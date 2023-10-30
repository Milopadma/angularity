import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // paths for other components
  {
    path: '', component: MainComponent
  },
  {
    path: 'test', component: TestComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
