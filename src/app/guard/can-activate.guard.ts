import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {LoginService} from '../service/login.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginService.isAuthenticated().pipe(
        map(resp => true),
        catchError(err => {
          this.router.navigateByUrl('/login');
          return of(false);
        })
      );
  }

}
