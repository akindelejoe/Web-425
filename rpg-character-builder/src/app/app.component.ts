import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private auth = inject(AuthService);
  private cookie = inject(CookieService);

  isAuth = false;
  email = '';

  ngOnInit(): void {
    this.auth.getAuthState().subscribe((state) => {
      this.isAuth = state;
      this.email = state ? this.cookie.get('session_user') : '';
    });
  }

  signout(): void {
    this.auth.signout();
  }
}
