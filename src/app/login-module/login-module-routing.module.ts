import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModuleComponent } from './login-module.component';
import { LinkedinLoginComponent } from './linkedin-login/linkedin-login.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: LoginModuleComponent, children: [{ path: '', redirectTo: 'linkedin-login', pathMatch: 'full' },
  { path: 'linkedin-login', component: LinkedinLoginComponent, data: { text: 'LinkedinLogin' } }, { path: 'login', component: LoginComponent, data: { text: 'Login' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule {
}
