import { Component, ViewChild } from '@angular/core';
import { NgbAlert, NgbConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { faker } from '@faker-js/faker';
import { NgbdCarouselBasic } from '../carousel-basic/carousel-basic.component';

@Component({
  selector: 'app-main',
  // templateUrl: './main.component.html',
  template: ` <div>
    <!-- <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-outline-primary">Primary</button> -->
    <div><app-form></app-form></div>
    <app-carousel-basic></app-carousel-basic>
  </div>`,
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [NgbModule, NgbAlert, FormComponent, NgbdCarouselBasic],
})
export class MainComponent {
  close(alert: NgbAlert) {
    alert.close();
  }
}
