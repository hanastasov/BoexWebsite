import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { AttatchedDocumentsComponent } from './attatched-documents.component';

describe('AttatchedDocumentsComponent', () => {
  let component: AttatchedDocumentsComponent;
  let fixture: ComponentFixture<AttatchedDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttatchedDocumentsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttatchedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
