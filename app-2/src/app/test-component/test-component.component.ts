import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    <div>actual title pass in: "{{ title }}"</div>
    <button (click)="hello()">press</button>
  `,
})
export class TestComponentComponent {
  constructor() {}
  @Input() title: string = 'yes';
  items = ['one', 'two', 'three', this.title];
  // helloevent
  @Output() helloevent = new EventEmitter<string>();

  hello() {
    this.helloevent.emit('Hello from TestComponentComponent');
  }
}
