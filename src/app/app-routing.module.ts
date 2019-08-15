import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmissionUploadComponent } from './admission/admission-upload/admission-upload.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AuthGuardService } from './_services/auth/authguard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'admissionUpload', component: AdmissionUploadComponent, outlet: 'homecontent' }
    ]
  },
  { path: 'logout', component: TopbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
