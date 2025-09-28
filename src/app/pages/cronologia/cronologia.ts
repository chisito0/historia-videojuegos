import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameEvent } from '../../models/game-event';
import { EVENTS } from '../../data/events';

@Component({
  selector: 'app-cronologia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cronologia.html',
  styleUrls: ['./cronologia.css']
})
export class Cronologia {

  query = '';
  sortDesc = false;               // ← nuevo: orden descendente
  decade = 'all';                 // ← nuevo: filtro por década
  events: GameEvent[] = EVENTS;

  // décadas calculadas a partir de los datos
  get decades(): string[] {
    const set = new Set(
      this.events.map(e => Math.floor(e.year / 10) * 10 + 's')
    );
    return ['all', ...Array.from(set).sort()];
  }

  private decadeOf(y: number) {
    return Math.floor(y / 10) * 10 + 's';
  }

  get filtered(): GameEvent[] {
    const q = this.query.trim().toLowerCase();

    let list = this.events.filter(e => {
      const matchesQuery =
        !q ||
        String(e.year).includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q);

      const matchesDecade =
        this.decade === 'all' || this.decadeOf(e.year) === this.decade;

      return matchesQuery && matchesDecade;
    });

    list = list.sort((a, b) => (this.sortDesc ? b.year - a.year : a.year - b.year));
    return list;
  }

  toggleSort() {
    this.sortDesc = !this.sortDesc;
  }

  imgError(e: Event) {
  const el = e.target as HTMLImageElement;
  el.style.display = 'none'; // ocultar si 404 / bloqueada
  }

}