import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.component').then((m) => m.ChatComponent),
      },
      {
        redirectTo: 'chat',
        path: '**',
        pathMatch: 'full',
      },
    ],
  },
  {
    redirectTo: 'home',
    path: '**',
    pathMatch: 'full',
  },
];
