// import { Component } from '@angular/core';
// import { BaseComponent } from "../shared/base.component";

import { Component, OnInit } from '@angular/core';
import { style, trigger, animate, transition, state } from '@angular/animations';
import { BoroService } from "../api/boro/boro.service";
import { Boro } from "../api/boro/boro.model";
import { ClliService } from "../api/clli/clli.service";
import { Clli } from "../api/clli/clli.model";
import { Observable } from "rxjs/Observable";
import { BaseComponent } from '../shared/base.component';
import { DisplayItemService } from "../api/displayItem/displayItem.service";
import { DisplayItem } from "../api/displayItem/displayItem.model";
import { YearService } from "../api/year/year.service";
import { Year } from "../api/year/year.model";
import { StatusService } from "../api/status/status.service";
import {Status} from "../api/status/status.model";

@Component({
  selector: 'tn-topnav',
  templateUrl: './topnav.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent extends BaseComponent implements OnInit {
  boros: Observable<DisplayItem[]>;
  worktypes: Observable<DisplayItem[]>;
  mktgPropRatings: Observable<DisplayItem[]>;
  months: Observable<DisplayItem[]>;
  trackerTypes: Observable<DisplayItem[]>;
  schedulerFinds: Observable<DisplayItem[]>;
  cllis: Observable<Clli[]>;
  years: Observable<Year[]>;
  statuses: Observable<Status[]>;

  componentTitle: string = 'Top Nav';
  filterMode: boolean = true;
  listMode: boolean = false;
  findMode: boolean = false;
  hotlistTitle: string = 'Lists';
  findTitle: string = 'Find';
  findAddress: string;
  findClli: string;
  optHotList: boolean;
  optVideoList: boolean;
  optLFARequired: boolean;
  optMTUMarketing: boolean;

  setFilterMode(): void {
    this.filterMode = true;
    this.listMode = false;
    this.findMode = false;    
  }

  setListMode(): void {
    this.filterMode = false;
    this.listMode = true;
    this.findMode = false;    
  }

  setFindMode(): void {
    this.filterMode = false;
    this.listMode = false;
    this.findMode = true;    
  }
  hotListClick(): void {
    if (this.hotlistTitle == 'Filter') {
      this.setFilterMode();   
      this.hotlistTitle = 'Lists';
      this.findTitle = 'Find';
    }
    else {
      this.setListMode();
      this.hotlistTitle = 'Filter';
      this.findTitle = 'Find';
    }
  }

  findClick(): void {
    if (this.findTitle == 'Find') {
      this.setFindMode();
      this.findTitle = 'Filter';
      this.hotlistTitle = 'Lists';
    }
    else {
      this.setFilterMode();
      this.findTitle = 'Find';
      this.hotlistTitle = 'Lists';
    }
  } 

  view(): void {

  }

  find(): void {

  }


  progress = false;

  constructor(private statusService: StatusService, private boroService: BoroService, private clliService: ClliService, private displayItemService: DisplayItemService, private yearService: YearService) {
    super('Topnav');
  }

  ngOnInit(): void {
    this.boros = this.displayItemService.getBoros().map(response => response.body);
    this.worktypes = this.displayItemService.getWorkTypes().map(response => response.body);
    this.mktgPropRatings = this.displayItemService.getMktgPropRatings().map(response => response.body);
    this.months = this.displayItemService.getMonths().map(response => response.body);
    this.trackerTypes = this.displayItemService.getTrackerTypes().map(response => response.body);
    this.schedulerFinds = this.displayItemService.getSchedulerfinds().map(response => response.body);
    this.years = this.yearService.getYears().map(response => response.body);
    this.statuses = this.statusService.getStatuses().map(response => response.body);
    
    this.cllis = this.clliService.getCllis().map(response => response.body);
  }
}