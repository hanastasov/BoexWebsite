import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsModuleRoutingModule } from './settings-module-routing.module';
import { SettingsModuleComponent } from './settings-module.component';
import { SettingsSubscriptionComponent } from './settings-subscription/settings-subscription.component';
import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxGridModule, IgxCardModule, IgxAvatarModule, IgxInputGroupModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SettingsSalesTaxComponent } from './settings-sales-tax/settings-sales-tax.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsSalesTaxEditComponent } from './settings-sales-tax-edit/settings-sales-tax-edit.component';

@NgModule({
  declarations: [
    SettingsModuleComponent,
    SettingsSubscriptionComponent,
    SettingsSalesTaxComponent,
    SettingsComponent,
    SettingsSalesTaxEditComponent
  ],
  imports: [
    CommonModule,
    SettingsModuleRoutingModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxToggleModule,
    FormsModule,
    IgxGridModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxInputGroupModule,
    IgxSelectModule
  ]
})
export class SettingsModuleModule {
}
