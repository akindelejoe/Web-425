import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SigninComponent },
  { path: 'create-character', component: CreateCharacterComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'signin' }
];
