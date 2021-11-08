import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('UserAdmin')) {
      //đã login
      return true;
    }

    //chưa login - chuyen huong ve trang /auth
    this.router.navigate(['/auth']);
    return false;
  }
}
