import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthTokenService } from '../_services/auth/authtoken.service';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authTokenService: AuthTokenService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.authTokenService.getToken()) {
      const xhr = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.authTokenService.getToken())
      });
      return next.handle(xhr);
    }
    return next.handle(req);
  }
}
