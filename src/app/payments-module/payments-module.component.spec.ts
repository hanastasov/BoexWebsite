import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsModuleComponent } from './payments-module.component';

describe('PaymentsModuleComponent', () => {
  let component: PaymentsModuleComponent;
  let fixture: ComponentFixture<PaymentsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
