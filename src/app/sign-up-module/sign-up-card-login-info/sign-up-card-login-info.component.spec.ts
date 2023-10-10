import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxInputGroupModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { SignUpCardLoginInfoComponent } from './sign-up-card-login-info.component';

describe('SignUpCardLoginInfoComponent', () => {
  let component: SignUpCardLoginInfoComponent;
  let fixture: ComponentFixture<SignUpCardLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCardLoginInfoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxInputGroupModule, IgxSelectModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCardLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
