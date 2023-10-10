import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { AccountCreationSuccessfulComponent } from './account-creation-successful.component';

describe('AccountCreationSuccessfulComponent', () => {
  let component: AccountCreationSuccessfulComponent;
  let fixture: ComponentFixture<AccountCreationSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreationSuccessfulComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
