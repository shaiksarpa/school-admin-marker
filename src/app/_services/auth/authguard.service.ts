import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthenticationService) {}
    canActivate(): boolean {
        debugger;
        if (this.authService.authenticated) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
