import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule } from '@infragistics/igniteui-angular';
import { CompanyInfoComponent } from './company-info.component';

describe('CompanyInfoComponent', () => {
  let component: CompanyInfoComponent;
  let fixture: ComponentFixture<CompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
