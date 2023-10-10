import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BOEXComponent } from './boex.component';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { BOEXNewTermsComponent } from './boex-new-terms/boex-new-terms.component';
import { BOEXConfirmationComponent } from './boex-confirmation/boex-confirmation.component';
import { BOEXStartComponent } from './boex-start/boex-start.component';
import { BOEXHistoryComponent } from './boex-history/boex-history.component';
import { AttatchedDocumentsComponent } from './attatched-documents/attatched-documents.component';
import { SignBoeComponent } from './sign-boe/sign-boe.component';

const routes: Routes = [{ path: '', component: BOEXComponent, children: [{ path: 'active-orders', component: ActiveOrdersComponent, data: { text: 'Active Orders' } }, { path: 'boex-new-terms', component: BOEXNewTermsComponent, data: { text: 'BOEX New terms' } }, { path: 'boex-confirmation', component: BOEXConfirmationComponent, data: { text: 'BOEX confirmation' } }, { path: 'boex-start', component: BOEXStartComponent, data: { text: 'BOEX start' } }, { path: 'boex-history', component: BOEXHistoryComponent, data: { text: 'BOEX History' } }, { path: 'attatched-documents', component: AttatchedDocumentsComponent, data: { text: 'Attatched documents' } }, { path: 'sign-boe', component: SignBoeComponent, data: { text: 'Sign Boe' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BOEXRoutingModule {
}
