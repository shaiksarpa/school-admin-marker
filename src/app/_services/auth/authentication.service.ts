import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from '../../constants/constant';
import { AuthTokenService } from './authtoken.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    authenticated: boolean;
    constructor(private http: HttpClient, private authTokenService: AuthTokenService) {  }

    login(credentials, callback) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.http.post(Constant.BASE_URL + '/auth', JSON.stringify(credentials), {headers})
        .subscribe(response => {
            this.authenticated = true;
            this.authTokenService.save(response['token']);
            return callback && callback();
        }, erorr => {
            this.authenticated = false;
            console.log(erorr);
        });
    }

    logout() {
        this.authTokenService.logout();
    }
}
