export interface GameEvent {
  year: number;
  title: string;
  description: string;
  image?: string;   // local (assets/...) o URL https
  link?: string;    // crédito/fuente opcional

  // NUEVO: detalles opcionales
  more?: string;    // texto libre con contexto
  specs?: {
    manufacturer?: string;
    generation?: string;
    media?: string;
    cpu_gpu?: string;
    notable_games?: string[];
    units_sold?: string; // texto (p. ej. "≈155 M")
  };
}
