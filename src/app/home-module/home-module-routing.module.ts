import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [{ path: '', component: HomeModuleComponent, children: [{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } }, { path: 'privacy', component: PrivacyComponent, data: { text: 'Privacy' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule {
}
