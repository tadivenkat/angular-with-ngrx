import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  httpClient = inject(HttpClient);
 
  constructor() { }

  getTodos() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get<Todo[]>(url);
  }
}
