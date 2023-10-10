import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxCheckboxModule } from '@infragistics/igniteui-angular';
import { InsuranceComponent } from './insurance.component';

describe('InsuranceComponent', () => {
  let component: InsuranceComponent;
  let fixture: ComponentFixture<InsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
