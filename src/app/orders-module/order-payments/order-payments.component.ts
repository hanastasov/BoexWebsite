import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RegionsType } from '../../models/northwind/regions';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-order-payments',
  templateUrl: './order-payments.component.html',
  styleUrls: ['./order-payments.component.scss']
})
export class OrderPaymentsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindRegions: RegionsType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('RegionsType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindRegions = data,
      error: (_err: any) => this.northwindRegions = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
