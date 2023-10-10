import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModuleComponent } from './orders-module.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderCustomersComponent } from './order-customers/order-customers.component';
import { OrderLinkedComponent } from './order-linked/order-linked.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPaymentsComponent } from './order-payments/order-payments.component';
import { OrderPaymentDetailsComponent } from './order-payment-details/order-payment-details.component';
import { OrderNegotiationsComponent } from './order-negotiations/order-negotiations.component';
import { OrdersEmailComponent } from './orders-email/orders-email.component';
import { OrderLogComponent } from './order-log/order-log.component';

const routes: Routes = [{ path: '', component: OrdersModuleComponent, children: [{ path: 'orders', component: OrdersComponent, data: { text: 'Orders' } }, { path: '', redirectTo: 'order-customers', pathMatch: 'full' },
  { path: 'order-customers', component: OrderCustomersComponent, data: { text: 'Order Customers' } }, { path: 'order-linked', component: OrderLinkedComponent, data: { text: 'Order linked' } }, { path: 'order-details', component: OrderDetailsComponent, data: { text: 'Order Details' } }, { path: 'order-payments', component: OrderPaymentsComponent, data: { text: 'Order Payments' } }, { path: 'order-payment-details', component: OrderPaymentDetailsComponent, data: { text: 'Order Payment Details' } }, { path: 'order-negotiations', component: OrderNegotiationsComponent, data: { text: 'Order Negotiations' } }, { path: 'orders-email', component: OrdersEmailComponent, data: { text: 'Orders Email' } }, { path: 'order-log', component: OrderLogComponent, data: { text: 'Order Log' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersModuleRoutingModule {
}
