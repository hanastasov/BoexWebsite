import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../../models/northwind/customers';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-stakeholder-archive',
  templateUrl: './stakeholder-archive.component.html',
  styleUrls: ['./stakeholder-archive.component.scss']
})
export class StakeholderArchiveComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCustomers: CustomersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('CustomersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
