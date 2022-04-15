import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appNumberformater]',
})
export class NumberformaterDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onBlur();
    }, 0);
  }

  @HostListener('keydown', ['$event']) // Accept only numbers
  keydown(event) {
    let regex: RegExp = new RegExp(/^[-+]?[0-9]\d*(\.\d+)?$/g);
    let allowedList = [
      'Backspace',
      'Tab',
      'End',
      'Home',
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
      'ArrowLeft',
      '-',
    ];

    let current: string = this.el.nativeElement.value;
    console.log(event.key);
    let next: string = current.concat(event.key);
    if (
      next &&
      !String(next).match(regex) &&
      allowedList.indexOf(event.key) == -1
    ) {
      event.preventDefault();
    }
  }

  @HostListener('focus') // Remove whitespaces from input in focus
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
