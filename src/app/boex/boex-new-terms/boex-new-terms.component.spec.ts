import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxSelectModule, IgxCheckboxModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxCardModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { BOEXNewTermsComponent } from './boex-new-terms.component';

describe('BOEXNewTermsComponent', () => {
  let component: BOEXNewTermsComponent;
  let fixture: ComponentFixture<BOEXNewTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOEXNewTermsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxSelectModule, IgxCheckboxModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule, IgxCardModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOEXNewTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
