import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { CreateBusinessAccountComponent } from './create-business-account.component';

describe('CreateBusinessAccountComponent', () => {
  let component: CreateBusinessAccountComponent;
  let fixture: ComponentFixture<CreateBusinessAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBusinessAccountComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBusinessAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
