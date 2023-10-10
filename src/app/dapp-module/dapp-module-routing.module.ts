import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DappModuleComponent } from './dapp-module.component';
import { DappComponent } from './dapp/dapp.component';

const routes: Routes = [{ path: '', component: DappModuleComponent, children: [{ path: '', redirectTo: 'dapp', pathMatch: 'full' },
  { path: 'dapp', component: DappComponent, data: { text: 'Dapp' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DappModuleRoutingModule {
}
