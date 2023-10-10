import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxRadioModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { EnhancerComponent } from './enhancer.component';

describe('EnhancerComponent', () => {
  let component: EnhancerComponent;
  let fixture: ComponentFixture<EnhancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancerComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxRadioModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
