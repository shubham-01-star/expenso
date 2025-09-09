import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
