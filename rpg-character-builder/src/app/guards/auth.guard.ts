import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = () => {
  const cookie = inject(CookieService);
  const router = inject(Router);

  if (cookie.check('session_user')) return true;

  router.navigate(['/signin']);
  return false;
};
