import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cronologia',
    pathMatch: 'full'
  },
  {
    path: 'cronologia',
    loadComponent: () =>
      import('./pages/cronologia/cronologia').then(m => m.Cronologia)
  },
  { path: '**', redirectTo: 'cronologia' }
];
