import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // <-- add RouterLinkActive
  template: `
    <nav class="nav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/create" routerLinkActive="active">Create Character</a>
    </nav>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <a routerLink="/create" routerLinkActive="active">Create Character</a> •
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      </nav>
      <p>&copy; {{ year }} RPG Character Builder</p>
    </footer>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
