import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxCheckboxModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { EmployeeRolesNewComponent } from './employee-roles-new.component';

describe('EmployeeRolesNewComponent', () => {
  let component: EmployeeRolesNewComponent;
  let fixture: ComponentFixture<EmployeeRolesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRolesNewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxCheckboxModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRolesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
