import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // remove if you don't have this file
})
export class AppComponent implements OnInit {
  isAuth = false;
  email = '';

  constructor(private cookies: CookieService) {}

  ngOnInit(): void {
    const session = this.cookies.get('session_user');
    if (session) {
      this.isAuth = true;
      this.email = session;
    }
  }

  signout(): void {
    this.cookies.delete('session_user', '/');
    this.isAuth = false;
    this.email = '';
  }
}
