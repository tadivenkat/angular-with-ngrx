import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.type';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
    selector: 'app-todos',
    imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos = signal<Todo[]>([]);
  searchTerm = signal('');

  constructor(private readonly todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos()
      .pipe(catchError(error => {
        console.error(error);
        throw error;
      }))
      .subscribe(todos => this.todos.set(todos));
  }

  updateTodoInTodos(updateTodoTo: Todo) {
    this.todos.update(todos => todos.map(eachTodo => {
      if (eachTodo.id === updateTodoTo.id) {
        eachTodo = updateTodoTo;
      }
      return eachTodo;
    }));
  }
}
