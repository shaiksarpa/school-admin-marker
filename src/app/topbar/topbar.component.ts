import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
