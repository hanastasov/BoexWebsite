import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxChipsModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { OrdersEmailComponent } from './orders-email.component';

describe('OrdersEmailComponent', () => {
  let component: OrdersEmailComponent;
  let fixture: ComponentFixture<OrdersEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersEmailComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxChipsModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
