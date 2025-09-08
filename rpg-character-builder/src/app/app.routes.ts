import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  {
    path: 'create',
    loadComponent: () =>
      import('./create-character/create-character.component')
        .then(m => m.CreateCharacterComponent)
  }
];
