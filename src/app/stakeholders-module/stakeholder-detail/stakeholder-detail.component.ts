import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShippersType } from '../../models/northwind/shippers';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-stakeholder-detail',
  templateUrl: './stakeholder-detail.component.html',
  styleUrls: ['./stakeholder-detail.component.scss']
})
export class StakeholderDetailComponent implements OnInit, OnDestroy {
  public buttonVisible3: boolean = false;
  private destroy$: Subject<void> = new Subject<void>();
  public northwindShippers: ShippersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('ShippersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindShippers = data,
      error: (_err: any) => this.northwindShippers = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
