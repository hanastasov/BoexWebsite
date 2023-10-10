import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxSelectModule, IgxListModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { BOEXConfirmationComponent } from './boex-confirmation.component';

describe('BOEXConfirmationComponent', () => {
  let component: BOEXConfirmationComponent;
  let fixture: ComponentFixture<BOEXConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOEXConfirmationComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxSelectModule, IgxListModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOEXConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
