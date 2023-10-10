import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { AccountSetupProgressComponent } from './account-setup-progress.component';

describe('AccountSetupProgressComponent', () => {
  let component: AccountSetupProgressComponent;
  let fixture: ComponentFixture<AccountSetupProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSetupProgressComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetupProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
