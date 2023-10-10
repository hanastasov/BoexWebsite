import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityModuleComponent } from './sustainability-module.component';

describe('SustainabilityModuleComponent', () => {
  let component: SustainabilityModuleComponent;
  let fixture: ComponentFixture<SustainabilityModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
