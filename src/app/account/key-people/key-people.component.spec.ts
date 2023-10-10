import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDialogModule, IgxCheckboxModule, IgxInputGroupModule, IgxDatePickerModule, IgxSelectModule, IgxRadioModule } from '@infragistics/igniteui-angular';
import { KeyPeopleComponent } from './key-people.component';

describe('KeyPeopleComponent', () => {
  let component: KeyPeopleComponent;
  let fixture: ComponentFixture<KeyPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPeopleComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDialogModule, IgxCheckboxModule, IgxInputGroupModule, IgxDatePickerModule, IgxSelectModule, IgxRadioModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
