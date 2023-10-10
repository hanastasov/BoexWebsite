import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDropDownModule, IgxDatePickerModule } from '@infragistics/igniteui-angular';
import { UserCreatedComponent } from './user-created.component';

describe('UserCreatedComponent', () => {
  let component: UserCreatedComponent;
  let fixture: ComponentFixture<UserCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreatedComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDropDownModule, IgxDatePickerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
