import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Landing Page</h2>
    <button (click)="fetchTodo()">Fetch Todo</button>

    <div *ngIf="todo">
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>Completed:</strong> {{ todo.completed }}</p>
    </div>
  `
})
export class LandingPageComponent {
  private api = inject(ApiService);
  todo: any = null;

  fetchTodo() {
    this.api.getTodo().subscribe((res) => {
      this.todo = res;
      console.log('API Response:', res);
    });
  }
}
