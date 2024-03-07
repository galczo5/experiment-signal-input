import {Component, Input, input} from '@angular/core';
import { RouterOutlet } from '@angular/router';

function input3() {
  let text3 = input('default value 3')
  return text3;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    Child
    {{ text() }}
    <button (click)="log()">Log</button>
  `
})
export class ChildComponent {
  text = input('default value');

  @Input()
  text2 = '';

  text3 = input3();
  log() {
    console.log(this.text);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  template: `
    Parent
    <app-child [text]="text" />
    <button (click)="onClick()">Click me!</button>
  `
})
export class AppComponent {
  text = '';

  onClick() {
    this.text = new Date().toISOString();
  }

}
