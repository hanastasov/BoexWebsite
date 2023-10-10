import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxTabsModule, IgxCardModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxGridModule, IgxIconModule, IgxDatePickerModule } from '@infragistics/igniteui-angular';
import { OrderCustomersComponent } from './order-customers.component';

describe('OrderCustomersComponent', () => {
  let component: OrderCustomersComponent;
  let fixture: ComponentFixture<OrderCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCustomersComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxTabsModule, IgxCardModule, IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxGridModule, IgxIconModule, IgxDatePickerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
