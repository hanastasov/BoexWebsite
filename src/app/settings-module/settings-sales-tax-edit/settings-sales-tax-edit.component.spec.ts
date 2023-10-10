import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { SettingsSalesTaxEditComponent } from './settings-sales-tax-edit.component';

describe('SettingsSalesTaxEditComponent', () => {
  let component: SettingsSalesTaxEditComponent;
  let fixture: ComponentFixture<SettingsSalesTaxEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSalesTaxEditComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSalesTaxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
