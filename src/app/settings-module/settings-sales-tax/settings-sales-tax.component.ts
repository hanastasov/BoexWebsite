import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../../models/northwind/categories';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-settings-sales-tax',
  templateUrl: './settings-sales-tax.component.html',
  styleUrls: ['./settings-sales-tax.component.scss']
})
export class SettingsSalesTaxComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('CategoriesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCategories = data,
      error: (_err: any) => this.northwindCategories = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
