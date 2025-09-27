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
  events: GameEvent[] = EVENTS;

  get filtered(): GameEvent[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.events.slice().sort((a, b) => a.year - b.year);
    return this.events
      .filter(e =>
        String(e.year).includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
      )
      .sort((a, b) => a.year - b.year);
  }
}
