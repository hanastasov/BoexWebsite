import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxSelectModule } from '@infragistics/igniteui-angular';
import { TermsOldNewComponent } from './terms-old-new.component';

describe('TermsOldNewComponent', () => {
  let component: TermsOldNewComponent;
  let fixture: ComponentFixture<TermsOldNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsOldNewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxSelectModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOldNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
