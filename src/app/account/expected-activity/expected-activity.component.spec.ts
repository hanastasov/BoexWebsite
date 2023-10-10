import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { ExpectedActivityComponent } from './expected-activity.component';

describe('ExpectedActivityComponent', () => {
  let component: ExpectedActivityComponent;
  let fixture: ComponentFixture<ExpectedActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedActivityComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
