import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
})
export class FormComponent {
  onSubmit() {
    console.log('Form submitted');
  }

}
