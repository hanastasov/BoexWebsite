import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxBadgeModule } from '@infragistics/igniteui-angular';
import { DappComponent } from './dapp.component';

describe('DappComponent', () => {
  let component: DappComponent;
  let fixture: ComponentFixture<DappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DappComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxBadgeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
