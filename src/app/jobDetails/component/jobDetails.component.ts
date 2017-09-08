import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseComponent } from "../../shared/base.component";
import { DisplayItem } from "../../api/displayItem/displayItem.model";
import { DisplayItemService } from "../../api/displayItem/displayItem.service";
import { ParentJobService } from "../../api/parentJob/parentJob.service";
import { ParentJob } from "../../api/parentJob/parentJob.model";

@Component({
  selector: 'tn-jobDetails',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.scss']
})
export class JobDetailsComponent extends BaseComponent implements OnInit {  
 parentJobs: Observable<ParentJob[]>;
 ecsClasses: Observable<DisplayItem[]>;
 ecsTypes: Observable<DisplayItem[]>;
 jobStatuses: Observable<DisplayItem[]>;
 jobDeleteOptions: Observable<DisplayItem[]>;
 jobNumber: string;
 print: string;
  myDate: Date

  constructor(private displayItemService: DisplayItemService, private parentJobService: ParentJobService) {
    super('JobDetails');
  }

  ngOnInit(): void {    
    this.parentJobs = this.parentJobService.getAll().map(response => response.body);
    this.ecsClasses = this.displayItemService.getEcsClasses().map(response => response.body);
    this.ecsTypes = this.displayItemService.getEcsTypes().map(response => response.body);
    this.jobStatuses = this.displayItemService.getJobStatuses().map(response => response.body);
    this.jobDeleteOptions = this.displayItemService.getJobDeleteOptions().map(response => response.body);
    
  }

  saveClick(): void {

  }

  deleteClick(): void {

  }


}