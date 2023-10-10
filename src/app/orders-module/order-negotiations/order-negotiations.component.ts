import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OrdersType } from '../../models/northwind/orders';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-order-negotiations',
  templateUrl: './order-negotiations.component.html',
  styleUrls: ['./order-negotiations.component.scss']
})
export class OrderNegotiationsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindOrders: OrdersType[] = [];
  public h5Visible: boolean = false;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('OrdersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindOrders = data,
      error: (_err: any) => this.northwindOrders = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
