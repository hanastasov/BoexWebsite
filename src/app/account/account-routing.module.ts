import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountSetupProgressComponent } from './account-setup-progress/account-setup-progress.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { KeyPeopleComponent } from './key-people/key-people.component';
import { ExpectedActivityComponent } from './expected-activity/expected-activity.component';
import { BankInfoComponent } from './bank-info/bank-info.component';

const routes: Routes = [{ path: '', component: AccountComponent, children: [{ path: 'account-setup-progress', component: AccountSetupProgressComponent, data: { text: 'Account setup progress' } }, { path: 'company-info', component: CompanyInfoComponent, data: { text: 'Company Info' } }, { path: 'personal-info', component: PersonalInfoComponent, data: { text: 'Personal Info' } }, { path: 'key-people', component: KeyPeopleComponent, data: { text: 'Key People' } }, { path: 'expected-activity', component: ExpectedActivityComponent, data: { text: 'Expected Activity' } }, { path: 'bank-info', component: BankInfoComponent, data: { text: 'Bank Info' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
