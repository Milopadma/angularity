import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  // templateUrl: './test-component.component.html',
  template: `
    <h1 class="font-bold">Test Component</h1>
    <p class="italic">Test Component works!</p>
    <div *ngIf="0 > 1">conditionals</div>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class TestComponentComponent {
  items = ['one', 'two', 'three'];

  constructor() {}
}
