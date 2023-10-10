import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxCheckboxModule } from '@infragistics/igniteui-angular';
import { OrderNegotiationsComponent } from './order-negotiations.component';

describe('OrderNegotiationsComponent', () => {
  let component: OrderNegotiationsComponent;
  let fixture: ComponentFixture<OrderNegotiationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNegotiationsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxNavigationDrawerModule, IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNegotiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
