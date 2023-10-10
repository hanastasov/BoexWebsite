import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholdersModuleComponent } from './stakeholders-module.component';

describe('StakeholdersModuleComponent', () => {
  let component: StakeholdersModuleComponent;
  let fixture: ComponentFixture<StakeholdersModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholdersModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholdersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
