import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsModuleRoutingModule } from './payments-module-routing.module';
import { PaymentsModuleComponent } from './payments-module.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { PaymentTypesEditComponent } from './payment-types-edit/payment-types-edit.component';
import { PaymentsProcessingComponent } from './payments-processing/payments-processing.component';

@NgModule({
  declarations: [
    PaymentsModuleComponent,
    PaymentTypesComponent,
    PaymentTypesEditComponent,
    PaymentsProcessingComponent
  ],
  imports: [
    CommonModule,
    PaymentsModuleRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDialogModule,
    IgxToggleModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule
  ]
})
export class PaymentsModuleModule {
}
