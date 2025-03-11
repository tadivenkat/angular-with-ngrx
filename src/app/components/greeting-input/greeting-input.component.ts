import { Component, output } from '@angular/core';

@Component({
  selector: 'app-greeting-input',
  imports: [],
  templateUrl: './greeting-input.component.html',
  styleUrl: './greeting-input.component.scss'
})
export class GreetingInputComponent {
  messageOutput = output<string>();
  message = "";
  updateMessage(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
    this.messageOutput.emit(this.message);
  }  
}
