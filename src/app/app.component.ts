import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Formater';
  values = '100099000.25';

  submit() {
    console.log('the result is ::', this.values);
  }

  // onKeydown(event: KeyboardEvent) {
  //   console.log(event);
  //   event.preventDefault();
  //   if (event.key == 'z' && event.ctrlKey) {
  //     console.log('is here');
  //     // event.target.checked = !event.target.checked;
  //   }
  // }
}
