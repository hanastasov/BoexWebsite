import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModuleComponent } from './sign-up-module.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountCreationSuccessfulComponent } from './account-creation-successful/account-creation-successful.component';
import { CreateBusinessAccountComponent } from './create-business-account/create-business-account.component';
import { UserCreatedComponent } from './user-created/user-created.component';
import { SignUpCardLoginComponent } from './sign-up-card-login/sign-up-card-login.component';
import { SignUpCardLoginInfoComponent } from './sign-up-card-login-info/sign-up-card-login-info.component';
import { SignUpCardAddressComponent } from './sign-up-card-address/sign-up-card-address.component';
import { SignUpCardIdentificationComponent } from './sign-up-card-identification/sign-up-card-identification.component';
import { SignUpCardBankingInformationComponent } from './sign-up-card-banking-information/sign-up-card-banking-information.component';
import { SignUpCardSocialsComponent } from './sign-up-card-socials/sign-up-card-socials.component';

const routes: Routes = [{ path: '', component: SignUpModuleComponent, children: [{ path: 'sign-up', component: SignUpComponent, data: { text: 'Sign up' } }, { path: 'account-creation-successful', component: AccountCreationSuccessfulComponent, data: { text: 'Account Creation Successful' } }, { path: 'create-business-account', component: CreateBusinessAccountComponent, data: { text: 'Create business account' } }, { path: 'user-created', component: UserCreatedComponent, data: { text: 'User Created' } }, { path: 'sign-up-card-login', component: SignUpCardLoginComponent, data: { text: 'Sign up card login' } }, { path: 'sign-up-card-login-info', component: SignUpCardLoginInfoComponent, data: { text: 'Sign up card login info' } }, { path: 'sign-up-card-address', component: SignUpCardAddressComponent, data: { text: 'Sign up card address' } }, { path: 'sign-up-card-identification', component: SignUpCardIdentificationComponent, data: { text: 'Sign up card identification' } }, { path: 'sign-up-card-banking-information', component: SignUpCardBankingInformationComponent, data: { text: 'Sign up card banking information' } }, { path: 'sign-up-card-socials', component: SignUpCardSocialsComponent, data: { text: 'Sign up card socials' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpModuleRoutingModule {
}
