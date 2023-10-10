import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpModuleRoutingModule } from './sign-up-module-routing.module';
import { SignUpModuleComponent } from './sign-up-module.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IgxCardModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxToggleModule, IgxDropDownModule, IgxDatePickerModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AccountCreationSuccessfulComponent } from './account-creation-successful/account-creation-successful.component';
import { CreateBusinessAccountComponent } from './create-business-account/create-business-account.component';
import { UserCreatedComponent } from './user-created/user-created.component';
import { SignUpCardLoginComponent } from './sign-up-card-login/sign-up-card-login.component';
import { SignUpCardLoginInfoComponent } from './sign-up-card-login-info/sign-up-card-login-info.component';
import { SignUpCardAddressComponent } from './sign-up-card-address/sign-up-card-address.component';
import { SignUpCardIdentificationComponent } from './sign-up-card-identification/sign-up-card-identification.component';
import { SignUpCardBankingInformationComponent } from './sign-up-card-banking-information/sign-up-card-banking-information.component';
import { SignUpCardSocialsComponent } from './sign-up-card-socials/sign-up-card-socials.component';

@NgModule({
  declarations: [
    SignUpModuleComponent,
    SignUpComponent,
    AccountCreationSuccessfulComponent,
    CreateBusinessAccountComponent,
    UserCreatedComponent,
    SignUpCardLoginComponent,
    SignUpCardLoginInfoComponent,
    SignUpCardAddressComponent,
    SignUpCardIdentificationComponent,
    SignUpCardBankingInformationComponent,
    SignUpCardSocialsComponent
  ],
  imports: [
    CommonModule,
    SignUpModuleRoutingModule,
    IgxCardModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxListModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxDatePickerModule,
    IgxSelectModule
  ]
})
export class SignUpModuleModule {
}
