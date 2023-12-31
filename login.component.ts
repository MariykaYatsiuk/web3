// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    if (this.authService.login(username, password)) {
      this.router.navigate(['/profile']);
    } else {
      alert('Ім\'я користувача або пароль введені не вірно');
    }
  }
}
