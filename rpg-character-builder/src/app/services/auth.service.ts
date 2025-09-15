import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private cookie = inject(CookieService);

  private users: User[] = [
    { empId: '1001', email: 'hero@rpg.com', password: 'Hero1234' },
    { empId: '1002', email: 'mage@rpg.com', password: 'Mage1234' },
  ];

  private authState = new BehaviorSubject<boolean>(false);

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.cookie.set('session_user', user.email, { path: '/' });
      this.authState.next(true);
      return true;
    }

    if (this.cookie.check('session_user')) this.cookie.delete('session_user', '/');
    this.authState.next(false);
    return false;
  }

  signout(): void {
    this.cookie.deleteAll('/');
    this.authState.next(false);
  }
}
