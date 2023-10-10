import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxCheckboxModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { StakeholderNewComponent } from './stakeholder-new.component';

describe('StakeholderNewComponent', () => {
  let component: StakeholderNewComponent;
  let fixture: ComponentFixture<StakeholderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderNewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxCheckboxModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
