import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxDialogModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { PaymentsProcessingComponent } from './payments-processing.component';

describe('PaymentsProcessingComponent', () => {
  let component: PaymentsProcessingComponent;
  let fixture: ComponentFixture<PaymentsProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsProcessingComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxDialogModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
