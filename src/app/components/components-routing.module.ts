import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NotifyPartyComponent } from './notify-party/notify-party.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EnhancerComponent } from './enhancer/enhancer.component';
import { NotifyParty1Component } from './notify-party1/notify-party1.component';
import { NewOldDeletedHistoryComponent } from './new-old-deleted-history/new-old-deleted-history.component';
import { TermsOldNewComponent } from './terms-old-new/terms-old-new.component';
import { SignComponent } from './sign/sign.component';
import { InsuranceComponent } from './insurance/insurance.component';

const routes: Routes = [{ path: '', component: ComponentsComponent, children: [{ path: 'notify-party', component: NotifyPartyComponent, data: { text: 'notify-party' } }, { path: '', redirectTo: 'file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent, data: { text: 'file-upload' } }, { path: 'enhancer', component: EnhancerComponent, data: { text: 'enhancer' } }, { path: 'notify-party1', component: NotifyParty1Component, data: { text: 'Notify Party' } }, { path: 'new-old-deleted-history', component: NewOldDeletedHistoryComponent, data: { text: 'new old deleted history' } }, { path: 'terms-old-new', component: TermsOldNewComponent, data: { text: 'Terms old new' } }, { path: 'sign', component: SignComponent, data: { text: 'sign' } }, { path: 'insurance', component: InsuranceComponent, data: { text: 'Insurance' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
