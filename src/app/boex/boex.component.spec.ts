import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOEXComponent } from './boex.component';

describe('BOEXComponent', () => {
  let component: BOEXComponent;
  let fixture: ComponentFixture<BOEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOEXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BOEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
