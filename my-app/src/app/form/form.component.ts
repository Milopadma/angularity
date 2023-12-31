import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <!-- a form component for angular html -->
    <form>
      <label>
        Name:
        <input type="text" name="name" class="form-control" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" class="form-control" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" class="form-control" />
      </label>
      <br />
      <button type="submit" class="btn btn-primary" (click)="onSubmit()">
        Submit
      </button>
    </form>
  `,
  styleUrls: ['./form.component.css'],
  standalone: true,
})
export class FormComponent {
  onSubmit() {
    console.log('Form submitted');
  }
}
