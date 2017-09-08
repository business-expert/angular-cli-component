import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MdDialog } from '@angular/material';
import { BaseComponent } from "../../shared/base.component";
import { DisplayItem } from "../../api/displayItem/displayItem.model";
import { DisplayItemService } from "../../api/displayItem/displayItem.service";
import { Delay } from "../../api/delay/delay.model";
import { DelayService } from "../../api/delay/delay.service";

@Component({
  selector: 'tn-scheduleHistory',
  templateUrl: './scheduleHistory.list.component.html',
  styleUrls: ['./scheduleHistory.list.component.scss']
})
export class ScheduleHistoryListComponent extends BaseComponent implements OnInit {  
  _delays: Delay[];
  delays = new BehaviorSubject(null);

  readonly delayColumns = [
    {
      field: 'delayDate',
      displayField: 'Delay Date'
    },
    {
      field: 'delayReason',
      displayField: 'Delay Reason'
    },
    {
      field: 'dateEffected',
      displayField: 'Date Effected'
    },
    {
      field: 'userId',
      displayField: 'User Id'
    }
  ];

  constructor(private displayItemService: DisplayItemService,
    private scheduleHistoryService: DelayService,
    private dialog: MdDialog) {
    super('ScheduleHistory');
  }

  ngOnInit(): void {
    this.pushSub(this.scheduleHistoryService.getAll().subscribe(response => {
      console.log(response);
      this.processResponse(response);
      if (response.success) {
        this._delays = response.body;
        this.delays.next(this._delays);
      }
    }));
  }
}