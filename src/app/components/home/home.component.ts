import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../greeting/greeting.component";
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  greetingMessage = signal("message defined in home.component.ts");
}
