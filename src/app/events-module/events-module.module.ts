import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsModuleRoutingModule } from './events-module-routing.module';
import { EventsModuleComponent } from './events-module.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsLogComponent } from './events-log/events-log.component';
import { IgxGridModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsModuleComponent,
    EventsDetailsComponent,
    EventsLogComponent
  ],
  imports: [
    CommonModule,
    EventsModuleRoutingModule,
    IgxGridModule,
    FormsModule
  ]
})
export class EventsModuleModule {
}
