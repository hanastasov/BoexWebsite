import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholdersModuleRoutingModule } from './stakeholders-module-routing.module';
import { StakeholdersModuleComponent } from './stakeholders-module.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { IgxButtonModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxToggleModule, IgxNavigationDrawerModule, IgxDialogModule, IgxInputGroupModule, IgxDropDownModule, IgxCheckboxModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { StakeholderDetailComponent } from './stakeholder-detail/stakeholder-detail.component';
import { StakeholderArchiveComponent } from './stakeholder-archive/stakeholder-archive.component';
import { StakeholderNewComponent } from './stakeholder-new/stakeholder-new.component';
import { StakeholderEditComponent } from './stakeholder-edit/stakeholder-edit.component';

@NgModule({
  declarations: [
    StakeholdersModuleComponent,
    StakeholderComponent,
    StakeholderDetailComponent,
    StakeholderArchiveComponent,
    StakeholderNewComponent,
    StakeholderEditComponent
  ],
  imports: [
    CommonModule,
    StakeholdersModuleRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxGridModule,
    FormsModule,
    IgxIconModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxCheckboxModule
  ]
})
export class StakeholdersModuleModule {
}
