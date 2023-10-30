import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex items-center justify-center flex-col">
      <div class="h-48"></div>
      <div class="text-4xl font-mono tracking-tighter">hello {{ title }}!</div>
      <div class="h-8"></div>
      <div
        class="flex flex-col items-center justify-center border-2 border-sky-400 rounded-lg px-4 py-2"
      >
        <button (click)="change()">change</button>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'app-2';
  ngOnInit() {
    // set title
    this.title = 'app-2 which one';
  }

  change() {
    // change title
    this.title = 'app-2 which two';
  }
}
