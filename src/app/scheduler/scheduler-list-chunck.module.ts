import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SchedulerListComponent } from './scheduler-list.component';



//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
    SchedulerListComponent
  ],
  exports: [ 
    SchedulerListComponent
  ],
})
export class SchedulerListChunkModule { }