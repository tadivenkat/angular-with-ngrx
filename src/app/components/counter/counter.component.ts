import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-counter',
    imports: [],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})

export class CounterComponent {
  initialValue = input(0);
  counter = signal(0);
  

  ngOnInit() {
    this.counter.update(value => this.initialValue());
  }
  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

}
