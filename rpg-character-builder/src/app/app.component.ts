import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <!-- ... your header/nav ... -->

    <main class="content">
      <router-outlet />
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <!-- your footer links -->
      </nav>
      <p>&copy; {{ year }} RPG Character Builder</p>
    </footer>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
