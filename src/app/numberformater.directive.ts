import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumberformater]',
  host:
})
export class NumberformaterDirective {
  constructor(private rendrer2: Renderer2, private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  keydown(event) {
    let regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    if (['Backspace', 'Tab', 'End', 'Home'].indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    console.log(next);
    if (next && !String(next).match(regex)) {
      event.preventDefault();
    }
  }

  @HostListener('focus')
  onFocus() {
    let text = this.el.nativeElement.value;
    text = text.replace(/ /g, '');
    this.el.nativeElement.value = text;
  }

  @HostListener('blur')
  onBlur() {
    let text = this.el.nativeElement.value; // get the value
    text = text.replace(/ /g, ''); // remove all white spaces
    let temp = Number(text).toFixed(2); // add dot two digits
    let parts = temp.toString().split('.'); // array of two parts splited with dot
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // add white space to every 3 digits
    text = parts.join('.'); // joint two parts with dot
    this.el.nativeElement.value = text; // set the new value
  }
}
