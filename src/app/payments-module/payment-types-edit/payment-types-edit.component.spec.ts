import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { PaymentTypesEditComponent } from './payment-types-edit.component';

describe('PaymentTypesEditComponent', () => {
  let component: PaymentTypesEditComponent;
  let fixture: ComponentFixture<PaymentTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypesEditComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
