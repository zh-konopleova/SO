import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './authorization.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
