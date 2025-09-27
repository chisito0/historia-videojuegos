import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
    <header class="topbar">
      <a routerLink="/cronologia" class="brand">Historia de los Videojuegos</a>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host { display:block; }
    .topbar { position: sticky; top:0; background:#111827; color:#fff; padding:.75rem 1rem; }
    .brand { color:#fff; text-decoration:none; font-weight:600; }
    main { padding: 1rem; }
  `]
})
export class App {
  protected readonly title = signal('historia-videojuegos');
}
