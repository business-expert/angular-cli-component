import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScheduleHistoryListComponent } from "./component/scheduleHistory.list.component";

//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ScheduleHistoryListComponent
  ],
  exports: [
    ScheduleHistoryListComponent
  ]
})
export class ScheduleHistoryModule { }