import { Injectable } from '@angular/core';
import { Constant } from 'src/app/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  save(token: string) {
    localStorage.removeItem(Constant.AUTH_TOKEN);
    localStorage.setItem(Constant.AUTH_TOKEN, token);
  }

  logout() {
    localStorage.clear();
  }

  getToken(): string {
   return localStorage.getItem(Constant.AUTH_TOKEN);
  }
}
