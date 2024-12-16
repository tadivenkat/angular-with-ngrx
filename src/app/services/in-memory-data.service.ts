import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    return {
      bookmarks: [
        {
          id: 1,
          name: 'Angular',
          url: 'https://angular.io',
          created: moment().toDate()
        },
        {
          id: 2,
          name: 'React',
          url: 'https://react.dev',
          created: moment().subtract(1, 'days').toDate()
        },
        {
          id: 3,
          name: 'Vue',
          url: 'https://vuejs.org',
          created: moment().subtract(3, 'days').toDate()
        },
        {
          id: 4,
          name: 'Svelte',
          url: 'https://svelte.dev',
          created: moment().subtract(5, 'days').toDate()
        }
      ],
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false
        }
      ]
    }
  }
}
