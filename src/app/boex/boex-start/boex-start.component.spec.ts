import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxSelectModule, IgxListModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { BOEXStartComponent } from './boex-start.component';

describe('BOEXStartComponent', () => {
  let component: BOEXStartComponent;
  let fixture: ComponentFixture<BOEXStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOEXStartComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxSelectModule, IgxListModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOEXStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
