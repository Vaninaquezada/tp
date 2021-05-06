import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateComponentGuard implements CanActivate {
  mail;
  constructor(private router: Router, private authSvc: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUser();;
  }
  async checkUser() {
    // this.mail = (await this.authSvc.getUsuario()).email;
    if (await this.authSvc.getUsuario()) {
      return true
    }
    return false;

  }
}
