import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';

import { ConnectService } from './connect/connect.service';
import { AccountService } from './account/account.service';
import { BoroService } from './boro/boro.service';
import { ClliService } from './clli/clli.service';
import { DisplayItemService } from './displayItem/displayItem.service';
import { YearService } from './year/year.service';
import { StatusService } from './status/status.service';
import { TrackerService } from './tracker/tracker.service';
import { JeopardyService } from './jeopardy/jeopardy.service';
import { DelayService } from "./delay/delay.service";
import { PropertyJobService } from "./propertyJob/propertyJob.service";
import { ParentJobService } from "./parentJob/parentJob.service";
import { EcsNoteService } from "./ecsNote/ecsNote.service";
import { TrackerNoteService } from "./trackerNote/trackerNote.service";


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ApiService,
    ConnectService,
    AccountService,
    BoroService,
    ClliService,
    DisplayItemService,
    YearService,
    StatusService,
    JeopardyService,
    TrackerService,
    DelayService,
    ParentJobService,
    PropertyJobService,
    EcsNoteService,
    TrackerNoteService
  ]
})
export class ApiModule { }
