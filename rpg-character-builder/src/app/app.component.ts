import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h1>RPG Character Builder</h1>
      </header>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Guilds</a></li>
            <li><a href="#">Factions</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a href="#">Characters</a> |
          <a href="#">Guilds</a> |
          <a href="#">Factions</a>
        </nav>
        <p>&copy; {{ year }} RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
    .wrapper{display:flex;flex-direction:column;min-height:100vh;width:75%;margin:0 auto}
    .banner{padding:16px;text-align:center}
    .main-content{display:flex;flex:1}
    .navbar{flex:0 0 220px;padding:16px}
    .navbar ul{list-style:none;margin:0;padding:0}
    .navbar li{padding:8px}
    .content{flex:1;padding:20px}
    .footer{padding:16px;text-align:center}
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
}
