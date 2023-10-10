import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule } from '@infragistics/igniteui-angular';
import { EventsLogComponent } from './events-log.component';

describe('EventsLogComponent', () => {
  let component: EventsLogComponent;
  let fixture: ComponentFixture<EventsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsLogComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
