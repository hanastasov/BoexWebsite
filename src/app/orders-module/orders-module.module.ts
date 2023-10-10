import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModuleRoutingModule } from './orders-module-routing.module';
import { OrdersModuleComponent } from './orders-module.component';
import { OrdersComponent } from './orders/orders.component';
import { IgxTabsModule, IgxGridModule, IgxCardModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxIconModule, IgxDatePickerModule, IgxNavigationDrawerModule, IgxCheckboxModule, IgxChipsModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { OrderCustomersComponent } from './order-customers/order-customers.component';
import { OrderLinkedComponent } from './order-linked/order-linked.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPaymentsComponent } from './order-payments/order-payments.component';
import { OrderPaymentDetailsComponent } from './order-payment-details/order-payment-details.component';
import { OrderNegotiationsComponent } from './order-negotiations/order-negotiations.component';
import { OrdersEmailComponent } from './orders-email/orders-email.component';
import { OrderLogComponent } from './order-log/order-log.component';

@NgModule({
  declarations: [
    OrdersModuleComponent,
    OrdersComponent,
    OrderCustomersComponent,
    OrderLinkedComponent,
    OrderDetailsComponent,
    OrderPaymentsComponent,
    OrderPaymentDetailsComponent,
    OrderNegotiationsComponent,
    OrdersEmailComponent,
    OrderLogComponent
  ],
  imports: [
    CommonModule,
    OrdersModuleRoutingModule,
    IgxTabsModule,
    IgxGridModule,
    FormsModule,
    IgxCardModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxDatePickerModule,
    IgxNavigationDrawerModule,
    IgxCheckboxModule,
    IgxChipsModule
  ]
})
export class OrdersModuleModule {
}
