import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';

export const accountsettingGuard: CanActivateFn = (route, state) => {
  const userServ = inject(UserService);
  const router = inject(Router);
  if (userServ.isLoggedIn.value) return true;
  router.navigateByUrl('/authuntication/login');
  return false;
};
