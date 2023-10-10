import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModuleComponent } from './settings-module.component';
import { SettingsSubscriptionComponent } from './settings-subscription/settings-subscription.component';
import { SettingsSalesTaxComponent } from './settings-sales-tax/settings-sales-tax.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsSalesTaxEditComponent } from './settings-sales-tax-edit/settings-sales-tax-edit.component';

const routes: Routes = [{ path: '', component: SettingsModuleComponent, children: [{ path: 'settings-subscription', component: SettingsSubscriptionComponent, data: { text: 'Settings Subscription' } }, { path: 'settings-sales-tax', component: SettingsSalesTaxComponent, data: { text: 'Settings sales tax' } }, { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, data: { text: 'Settings' } }, { path: 'settings-sales-tax-edit', component: SettingsSalesTaxEditComponent, data: { text: 'Settings sales tax edit' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsModuleRoutingModule {
}
