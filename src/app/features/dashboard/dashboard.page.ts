// src/app/features/dashboard/dashboard.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="p-10 text-center">
      <h2 class="text-3xl font-bold text-purple-600">Dashboard</h2>
      <p class="mt-4">Welcome to your dashboard! 🚀</p>
    </section>
  `
})
export class DashboardPageComponent {}
