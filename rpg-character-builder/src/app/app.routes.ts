import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Sign in (standalone)
  { path: 'signin', component: SigninComponent },

  // Create Guild (standalone, lazy)
  {
    path: 'create-guild',
    loadComponent: () =>
      import('./create-guild/create-guild.component')
        .then(m => m.CreateGuildComponent)
  },

  // Create Character (standalone, lazy)
  {
    path: 'create-character',
    loadComponent: () =>
      import('./create-character/create-character.component')
        .then(m => m.CreateCharacterComponent)
  },

  
  {
    path: 'create',
    redirectTo: 'create-character',
    pathMatch: 'full'
  },

  { path: '**', redirectTo: '' }
];
