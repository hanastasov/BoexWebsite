import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { HomeModuleComponent } from './home-module.component';

describe('HomeModuleComponent', () => {
  let component: HomeModuleComponent;
  let fixture: ComponentFixture<HomeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModuleComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
