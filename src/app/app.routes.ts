import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing.page';
import { LoginPage } from './features/auth/login.page';
import { SignupPage } from './features/auth/signup.page';
import { DashboardPageComponent } from './features/dashboard/dashboard.page';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '**', redirectTo: '' } 
];
