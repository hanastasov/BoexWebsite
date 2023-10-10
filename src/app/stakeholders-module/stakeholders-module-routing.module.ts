import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeholdersModuleComponent } from './stakeholders-module.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { StakeholderDetailComponent } from './stakeholder-detail/stakeholder-detail.component';
import { StakeholderArchiveComponent } from './stakeholder-archive/stakeholder-archive.component';
import { StakeholderNewComponent } from './stakeholder-new/stakeholder-new.component';
import { StakeholderEditComponent } from './stakeholder-edit/stakeholder-edit.component';

const routes: Routes = [{ path: '', component: StakeholdersModuleComponent, children: [{ path: '', redirectTo: 'stakeholder', pathMatch: 'full' },
  { path: 'stakeholder', component: StakeholderComponent, data: { text: 'Stakeholder' } }, { path: 'stakeholder-detail', component: StakeholderDetailComponent, data: { text: 'Stakeholder Detail' } }, { path: 'stakeholder-archive', component: StakeholderArchiveComponent, data: { text: 'Stakeholder Archive' } }, { path: 'stakeholder-new', component: StakeholderNewComponent, data: { text: 'Stakeholder New' } }, { path: 'stakeholder-edit', component: StakeholderEditComponent, data: { text: 'Stakeholder Edit' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakeholdersModuleRoutingModule {
}
