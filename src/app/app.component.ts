import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  values = '1000000.25';

  onBlurMethod() {
    // this.values = this.values.replace(/ /g, '');
    // let temp = Number(this.values).toFixed(2);
    // var parts = temp.toString().split('.');
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    // this.values = parts.join('.');
  }

  submit() {
    console.log('the result is ::', this.values.replace(/ /g, ''));
  }
}
