import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DappModuleComponent } from './dapp-module.component';

describe('DappModuleComponent', () => {
  let component: DappModuleComponent;
  let fixture: ComponentFixture<DappModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DappModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DappModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
