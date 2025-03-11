import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../greeting/greeting.component";
import { CounterComponent } from '../counter/counter.component';
import { GreetingInputComponent } from "../greeting-input/greeting-input.component";

@Component({
    selector: 'app-home',
    imports: [GreetingComponent, CounterComponent, GreetingInputComponent, GreetingInputComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  greetingMessage = signal("message defined in home.component.ts");

  updateGreetingMessage(message: string) {
    this.greetingMessage.update(value => message);
  }
}
