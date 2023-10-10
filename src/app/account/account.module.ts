import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountSetupProgressComponent } from './account-setup-progress/account-setup-progress.component';
import { IgxCardModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule, IgxSelectModule, IgxRadioModule, IgxListModule, IgxToggleModule, IgxDialogModule, IgxCheckboxModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { KeyPeopleComponent } from './key-people/key-people.component';
import { ExpectedActivityComponent } from './expected-activity/expected-activity.component';
import { BankInfoComponent } from './bank-info/bank-info.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountSetupProgressComponent,
    CompanyInfoComponent,
    PersonalInfoComponent,
    KeyPeopleComponent,
    ExpectedActivityComponent,
    BankInfoComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    IgxCardModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxSelectModule,
    IgxRadioModule,
    IgxListModule,
    IgxToggleModule,
    IgxDialogModule,
    IgxCheckboxModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ]
})
export class AccountModule {
}
