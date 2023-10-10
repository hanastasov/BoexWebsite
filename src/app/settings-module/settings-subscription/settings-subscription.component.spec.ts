import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { SettingsSubscriptionComponent } from './settings-subscription.component';

describe('SettingsSubscriptionComponent', () => {
  let component: SettingsSubscriptionComponent;
  let fixture: ComponentFixture<SettingsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSubscriptionComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxDialogModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
