import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from'@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService,
        private myRoute: Router) {
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.auth.isLoggedIn());
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.myRoute.navigate(["Login"]);
            alert("Must be logged in to access that page.")
            return false;
        }
    }
}