import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsModuleComponent } from './payments-module.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { PaymentTypesEditComponent } from './payment-types-edit/payment-types-edit.component';
import { PaymentsProcessingComponent } from './payments-processing/payments-processing.component';

const routes: Routes = [{ path: '', component: PaymentsModuleComponent, children: [{ path: 'payment-types', component: PaymentTypesComponent, data: { text: 'Payment types' } }, { path: 'payment-types-edit', component: PaymentTypesEditComponent, data: { text: 'Payment Types edit' } }, { path: 'payments-processing', component: PaymentsProcessingComponent, data: { text: 'Payments Processing' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsModuleRoutingModule {
}
