import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxNavigationDrawerModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { StakeholderDetailComponent } from './stakeholder-detail.component';

describe('StakeholderDetailComponent', () => {
  let component: StakeholderDetailComponent;
  let fixture: ComponentFixture<StakeholderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderDetailComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxNavigationDrawerModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
