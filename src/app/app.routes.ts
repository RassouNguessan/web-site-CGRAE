import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '', loadChildren: () => import('./main-layout.route')},
  {path: '', loadChildren: () => import('./login-layout.route')},
];
