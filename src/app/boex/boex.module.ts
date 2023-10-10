import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BOEXRoutingModule } from './boex-routing.module';
import { BOEXComponent } from './boex.component';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { IgxGridModule, IgxInputGroupModule, IgxSelectModule, IgxCheckboxModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxCardModule, IgxDialogModule, IgxAccordionModule, IgxExpansionPanelModule, IgxDatePickerModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { BOEXNewTermsComponent } from './boex-new-terms/boex-new-terms.component';
import { BOEXConfirmationComponent } from './boex-confirmation/boex-confirmation.component';
import { BOEXStartComponent } from './boex-start/boex-start.component';
import { BOEXHistoryComponent } from './boex-history/boex-history.component';
import { AttatchedDocumentsComponent } from './attatched-documents/attatched-documents.component';
import { SignBoeComponent } from './sign-boe/sign-boe.component';

@NgModule({
  declarations: [
    BOEXComponent,
    ActiveOrdersComponent,
    BOEXNewTermsComponent,
    BOEXConfirmationComponent,
    BOEXStartComponent,
    BOEXHistoryComponent,
    AttatchedDocumentsComponent,
    SignBoeComponent
  ],
  imports: [
    CommonModule,
    BOEXRoutingModule,
    IgxGridModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxCheckboxModule,
    IgxListModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxSnackbarModule,
    IgxToggleModule,
    IgxCardModule,
    IgxDialogModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxDatePickerModule,
    IgxAvatarModule,
    IgxIconModule
  ]
})
export class BOEXModule {
}
