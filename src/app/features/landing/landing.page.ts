// src/app/features/landing/landing.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="p-10 text-center">
      <h1 class="text-4xl font-bold text-blue-600">Expense Tracker</h1>
      <p class="mt-4 text-gray-600">
        Track your expenses, manage your budget, and get insights with ease.
      </p>
      <div class="mt-6 space-x-4">
        <a routerLink="/login" class="px-6 py-2 bg-blue-500 text-white rounded">
          Login
        </a>
        <a routerLink="/signup" class="px-6 py-2 bg-green-500 text-white rounded">
          Sign Up
        </a>
      </div>

      <div class="mt-10 text-left max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold">✅ Core Features</h2>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Daily expense entry form</li>
          <li>Expense categories (Food, Travel, Shopping, Bills, Miscellaneous)</li>
          <li>Confirmation mail after each expense</li>
          <li>Daily reminder system if user forgets to log</li>
          <li>Monthly expense report auto-mail</li>
          <li>Budget limit alert</li>
        </ul>

        <h2 class="mt-6 text-2xl font-semibold">📊 Extra Features</h2>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Recurring expenses (e.g., Rent, EMI)</li>
          <li>Graphs (Pie chart, Line chart)</li>
          <li>Dashboard for monthly summary</li>
        </ul>
      </div>
    </section>
  `
})
export class LandingPageComponent {}
