// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    // Ваша логіка перевірки логіна. Тут використовується простий приклад.
    if (username === 'Admin' && password === '12345') {
      // Якщо логін успішний, встановіть значення в localStorage
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Логіка виходу. Тут можна очистити localStorage та виконати інші дії
    localStorage.setItem('isLoggedIn', 'false');
  }
}
