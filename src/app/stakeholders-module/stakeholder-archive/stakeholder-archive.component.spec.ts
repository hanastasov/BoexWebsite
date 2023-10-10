import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxGridModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { StakeholderArchiveComponent } from './stakeholder-archive.component';

describe('StakeholderArchiveComponent', () => {
  let component: StakeholderArchiveComponent;
  let fixture: ComponentFixture<StakeholderArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderArchiveComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxGridModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
