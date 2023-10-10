import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { NotifyParty1Component } from './notify-party1.component';

describe('NotifyParty1Component', () => {
  let component: NotifyParty1Component;
  let fixture: ComponentFixture<NotifyParty1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyParty1Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyParty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
