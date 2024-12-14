import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  elementRef = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.elementRef.nativeElement.style.textDecoration = 'line-through';
      this.elementRef.nativeElement.style.color = 'green';
      this.elementRef.nativeElement.style.backgroundColor = '#f5f5f5';
    } else {
      this.elementRef.nativeElement.style.textDecoration = 'none';
      this.elementRef.nativeElement.style.color = 'red';
      this.elementRef.nativeElement.style.backgroundColor = '#f5f5f5';
    }
  })
  constructor() { }

}
