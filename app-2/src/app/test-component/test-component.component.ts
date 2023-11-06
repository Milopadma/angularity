import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

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
    <div>
      {{ data.fact }}
    </div>
  `,
})
export class TestComponentComponent {
  constructor(private dataService: DataService) {}

  @Input() title: string = 'yes';
  items = ['one', 'two', 'three', this.title];
  // helloevent
  @Output() helloevent = new EventEmitter<string>();

  hello() {
    this.helloevent.emit('Hello from TestComponentComponent');
  }

  data: CatFact = {
    fact: '',
    length: 0,
  };

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}

type CatFact = {
  fact: string;
  length: number;
};
