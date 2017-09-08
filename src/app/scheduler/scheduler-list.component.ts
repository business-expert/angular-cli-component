import { Component, OnInit } from '@angular/core';
import { Tracker } from '../api/tracker/tracker.model';
import { Observable } from "rxjs/Observable";
import { TrackerService } from '../api/tracker/tracker.service';
import { BaseComponent } from '../shared/base.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'tn-scheduler-list',
  templateUrl: './scheduler-list.html',
  styleUrls: ['./scheduler-list.component.scss']
})
export class SchedulerListComponent extends BaseComponent implements OnInit {
  readonly trackerColumns = [
    {
      field: 'mduAddress',
      displayField: 'MDU Address'
    },
    {
      field: 'clli',
      displayField: 'CLLI'
    },
    {
      field: 'blockLotNumber',
      displayField: 'Block Lot #'
    },
    {
      field: 'specialId',
      displayField: 'special Id'
    }
    ,
    {
      field: 'docStatus',
      displayField: 'Doc Status'
    }
    ,
    {
      field: 'lus',
      displayField: 'LUs'
    }
    ,
    {
      field: 'nsis',
      displayField: 'NSIs'
    }
    ,
    {
      field: 'marketPriority',
      displayField: 'Mkt Prty'
    }
    ,
    {
      field: 'seventeenK',
      displayField: '17K'
    }
    ,
    {
      field: 'nintyFivePercent',
      displayField: '95%'
    }
  ];

  _trackers: Tracker[];

  trackers = new BehaviorSubject(null);

  constructor(private trackerService: TrackerService) {
    super('SchedulerList');
  }

  ngOnInit(): void {

    this.pushSub(this.trackerService.getAll().subscribe(response => {
      console.log(response);
      this.processResponse(response);
      if (response.success) {
        this._trackers = response.body;
        this.trackers.next(this._trackers);
      }

    }));
  }

}