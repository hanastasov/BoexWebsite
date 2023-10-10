import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxAccordionModule, IgxExpansionPanelModule, IgxInputGroupModule, IgxDatePickerModule, IgxSelectModule, IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { BOEXHistoryComponent } from './boex-history.component';

describe('BOEXHistoryComponent', () => {
  let component: BOEXHistoryComponent;
  let fixture: ComponentFixture<BOEXHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOEXHistoryComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxAccordionModule, IgxExpansionPanelModule, IgxInputGroupModule, IgxDatePickerModule, IgxSelectModule, IgxListModule, IgxAvatarModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOEXHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
