import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './component/home.component';

import { router } from './home.routing';
import { SchedulerListChunkModule } from '../scheduler/scheduler-list-chunck.module';
import { PathChunkModule } from '../path/path-chunck.module';
import { DetailsChunkModule } from '../Details/details-chunck.module';
import { JeopardyModule } from "../jeopardy/jeopardy.module";
import { ScheduleHistoryModule } from "../scheduleHistory/scheduleHistory.module";
import { JobDetailsModule } from "../jobDetails/jobDetails.module";
import { NotesModule } from "../notes/notes.module";
import { EditorModule } from "../editor/editor.module";



//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SchedulerListChunkModule,
    PathChunkModule,
    DetailsChunkModule,
    JeopardyModule,
    ScheduleHistoryModule,
    JobDetailsModule,
    NotesModule,
    EditorModule,
    router    
  ],
  declarations: [ 
    HomeComponent
  ]
})
export class HomeChunkModule { }
