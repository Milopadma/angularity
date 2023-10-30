import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex items-center justify-center flex-col">
      <nav>
        <ul>
          <li>
            <a
              routerLink="/"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              >First Component</a
            >
          </li>
          <li>
            <a
              routerLink="/test"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              >Second Component</a
            >
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
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

  // on form submit, send data to server
  onSubmit() {
    // send data to server
    console.log('onSubmit');
  }
}
