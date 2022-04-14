import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  values = '1000000.25';

  submit() {
    console.log('the result is ::', this.values);
  }
}
