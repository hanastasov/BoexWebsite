import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { OrderLinkedComponent } from './order-linked.component';

describe('OrderLinkedComponent', () => {
  let component: OrderLinkedComponent;
  let fixture: ComponentFixture<OrderLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderLinkedComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
