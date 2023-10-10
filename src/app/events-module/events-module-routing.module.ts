import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsModuleComponent } from './events-module.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsLogComponent } from './events-log/events-log.component';

const routes: Routes = [{ path: '', component: EventsModuleComponent, children: [{ path: 'events-details', component: EventsDetailsComponent, data: { text: 'Events details' } }, { path: 'events-log', component: EventsLogComponent, data: { text: 'Events log' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsModuleRoutingModule {
}
