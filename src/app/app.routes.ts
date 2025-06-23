import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contador',
    loadComponent: () => import('./components/contador/contador.component').then(m => m.ContadorComponent)
  },
  {
    path: 'incrementar',
    loadComponent: () => import('./components/incrementar/incrementar.component').then(m => m.IncrementarComponent)
  },
  {
    path: 'decrementar',
    loadComponent: () => import('./components/decrementar/decrementar.component').then(m => m.DecrementarComponent)
  },
  {
    path: 'reiniciar',
    loadComponent: () => import('./components/reiniciar/reiniciar.component').then(m => m.ReiniciarComponent)
  },
  {
    path: 'grafico',
    loadComponent: () => import('./components/grafico/grafico.component').then(m => m.GraficoComponent)
  }
];
