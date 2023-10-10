import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxCheckboxModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { StakeholderEditComponent } from './stakeholder-edit.component';

describe('StakeholderEditComponent', () => {
  let component: StakeholderEditComponent;
  let fixture: ComponentFixture<StakeholderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderEditComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxCheckboxModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
