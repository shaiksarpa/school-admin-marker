import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/auth/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    credentials = {username: '', password: ''};

 ngOnInit() { }


  constructor(private authService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.authService.login(this.credentials, () => {
        this.router.navigateByUrl('/home');
    });
    return false;
  }
}
