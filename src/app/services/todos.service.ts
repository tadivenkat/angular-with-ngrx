import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
 
  constructor(private httpClient: HttpClient) { }

  getTodos() {
    let url = 'api/todos';
    return this.httpClient.get<Todo[]>(url);
  }
}
