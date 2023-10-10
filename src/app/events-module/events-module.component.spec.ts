import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsModuleComponent } from './events-module.component';

describe('EventsModuleComponent', () => {
  let component: EventsModuleComponent;
  let fixture: ComponentFixture<EventsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
