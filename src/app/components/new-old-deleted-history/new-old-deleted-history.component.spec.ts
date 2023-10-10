import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { NewOldDeletedHistoryComponent } from './new-old-deleted-history.component';

describe('NewOldDeletedHistoryComponent', () => {
  let component: NewOldDeletedHistoryComponent;
  let fixture: ComponentFixture<NewOldDeletedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOldDeletedHistoryComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOldDeletedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
