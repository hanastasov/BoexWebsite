import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxInputGroupModule, IgxDatePickerModule } from '@infragistics/igniteui-angular';
import { SignUpCardBankingInformationComponent } from './sign-up-card-banking-information.component';

describe('SignUpCardBankingInformationComponent', () => {
  let component: SignUpCardBankingInformationComponent;
  let fixture: ComponentFixture<SignUpCardBankingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCardBankingInformationComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxInputGroupModule, IgxDatePickerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCardBankingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
