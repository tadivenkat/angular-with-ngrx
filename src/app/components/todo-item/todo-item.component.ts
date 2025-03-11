import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
    selector: 'app-todo-item',
    imports: [HighlightCompletedTodoDirective],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  updatedTodo = output<Todo>();
  todoToggle = () => {
    this.todo().completed = !this.todo().completed;
    this.updatedTodo.emit(this.todo());
  }
}
