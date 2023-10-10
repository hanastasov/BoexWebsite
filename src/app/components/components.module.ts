import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { NotifyPartyComponent } from './notify-party/notify-party.component';
import { IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxSelectModule, IgxTabsModule, IgxCardModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EnhancerComponent } from './enhancer/enhancer.component';
import { NotifyParty1Component } from './notify-party1/notify-party1.component';
import { NewOldDeletedHistoryComponent } from './new-old-deleted-history/new-old-deleted-history.component';
import { TermsOldNewComponent } from './terms-old-new/terms-old-new.component';
import { SignComponent } from './sign/sign.component';
import { InsuranceComponent } from './insurance/insurance.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    NotifyPartyComponent,
    FileUploadComponent,
    EnhancerComponent,
    NotifyParty1Component,
    NewOldDeletedHistoryComponent,
    TermsOldNewComponent,
    SignComponent,
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxRadioModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxSelectModule,
    IgxTabsModule,
    IgxCardModule
  ]
})
export class ComponentsModule {
}
