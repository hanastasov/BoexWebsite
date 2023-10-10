import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { NotifyPartyComponent } from './notify-party.component';

describe('NotifyPartyComponent', () => {
  let component: NotifyPartyComponent;
  let fixture: ComponentFixture<NotifyPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyPartyComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxCheckboxModule, IgxRadioModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
