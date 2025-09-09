import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
})
export class SignupPage {
  constructor(private router: Router) {}

  onSignupSuccess() {
    // Normally yaha API call hogi
    localStorage.setItem('token', 'dummy-token'); 
    this.router.navigate(['/dashboard']);
  }
}
