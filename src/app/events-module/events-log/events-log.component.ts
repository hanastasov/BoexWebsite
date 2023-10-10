import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsType } from '../../models/northwind/products';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-events-log',
  templateUrl: './events-log.component.html',
  styleUrls: ['./events-log.component.scss']
})
export class EventsLogComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindProducts: ProductsType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('ProductsType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindProducts = data,
      error: (_err: any) => this.northwindProducts = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
