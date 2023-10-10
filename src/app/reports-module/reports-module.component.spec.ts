import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsModuleComponent } from './reports-module.component';

describe('ReportsModuleComponent', () => {
  let component: ReportsModuleComponent;
  let fixture: ComponentFixture<ReportsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
