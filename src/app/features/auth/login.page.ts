import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  constructor(private router: Router) {}

  onLoginSuccess() {
    // normally aap yaha API call karoge
    localStorage.setItem('token', 'dummy-token'); 
    this.router.navigate(['/dashboard']);
  }
}
