import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginModuleComponent } from './login-module.component';
import { LinkedinLoginComponent } from './linkedin-login/linkedin-login.component';
import { LoginComponent } from './login/login.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginModuleComponent,
    LinkedinLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxInputGroupModule,
    FormsModule
  ]
})
export class LoginModuleModule {
}
