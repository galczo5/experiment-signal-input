import {Component, input} from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
