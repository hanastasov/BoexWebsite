import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'employee-module', loadChildren: () => import('./employee-module/employee-module.module').then(m => m.EmployeeModuleModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'boex', loadChildren: () => import('./boex/boex.module').then(m => m.BOEXModule) },
  { path: 'login-module', loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule) },
  { path: '', redirectTo: 'sign-up-module', pathMatch: 'full' },
  { path: 'sign-up-module', loadChildren: () => import('./sign-up-module/sign-up-module.module').then(m => m.SignUpModuleModule) },
  { path: 'dapp-module', loadChildren: () => import('./dapp-module/dapp-module.module').then(m => m.DappModuleModule) },
  { path: 'events-module', loadChildren: () => import('./events-module/events-module.module').then(m => m.EventsModuleModule) },
  { path: 'home-module', loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule) },
  { path: 'orders-module', loadChildren: () => import('./orders-module/orders-module.module').then(m => m.OrdersModuleModule) },
  { path: 'payments-module', loadChildren: () => import('./payments-module/payments-module.module').then(m => m.PaymentsModuleModule) },
  { path: 'reports-module', loadChildren: () => import('./reports-module/reports-module.module').then(m => m.ReportsModuleModule) },
  { path: 'settings-module', loadChildren: () => import('./settings-module/settings-module.module').then(m => m.SettingsModuleModule) },
  { path: 'sustainability-module', loadChildren: () => import('./sustainability-module/sustainability-module.module').then(m => m.SustainabilityModuleModule) },
  { path: 'stakeholders-module', loadChildren: () => import('./stakeholders-module/stakeholders-module.module').then(m => m.StakeholdersModuleModule) },
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
