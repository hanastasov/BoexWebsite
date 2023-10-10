import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { SignUpCardIdentificationComponent } from './sign-up-card-identification.component';

describe('SignUpCardIdentificationComponent', () => {
  let component: SignUpCardIdentificationComponent;
  let fixture: ComponentFixture<SignUpCardIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCardIdentificationComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCardIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
