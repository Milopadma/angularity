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
      <!-- generic login form -->
      <div class="h-8"></div>
      <div
        class="flex flex-col items-center justify-center border-2 border-sky-400 rounded-lg px-4 py-2"
      >
        <form action="submit">
          <div class="flex flex-col">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="h-4"></div>
          <div class="flex flex-col">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="h-4"></div>
          <div class="flex flex-col">
            <button type="submit" (click)="onSubmit()">Login</button>
          </div>
        </form>
        <app-test-component></app-test-component>
      </div>
    </div>
  `,
})
export class MainComponent implements OnInit {
  title = 'app-2';
  ngOnInit() {
    // set title
    this.title = 'app-2 which one';
  }

  change() {
    // change title
    this.title = 'app-2 which two';
  }

  // on form submit, send data to server
  onSubmit() {
    // send data to server
    console.log('onSubmit');
  }
}
