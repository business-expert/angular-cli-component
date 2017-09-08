import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MdDialog } from '@angular/material';
import { BaseComponent } from "../../shared/base.component";
import { DisplayItem } from "../../api/displayItem/displayItem.model";
import { Jeopardy } from "../../api/jeopardy/jeopardy.model";
import { DisplayItemService } from "../../api/displayItem/displayItem.service";
import { JeopardyService } from "../../api/jeopardy/jeopardy.service";
import { JeopardyEditComponent } from "./jeopardy.edit.component";


@Component({
  selector: 'tn-jeopardy',
  templateUrl: './jeopardy.list.component.html',
  styleUrls: ['./jeopardy.list.component.scss']
})
export class JeopardyListComponent extends BaseComponent implements OnInit {
  jeopardyDescriptions: Observable<DisplayItem[]>;
  jeopardyOwners: Observable<DisplayItem[]>;
  _jeopardies: Jeopardy[];
  jeopardies = new BehaviorSubject(null);

  readonly jeopardyColumns = [
    {
      field: 'jeopardy',
      displayField: 'Jeopardy'
    },
    {
      field: 'owner',
      displayField: 'Owner'
    },
    {
      field: 'systemNote',
      displayField: 'System Note'
    }
  ];

  constructor(private displayItemService: DisplayItemService,
    private jeopardyService: JeopardyService,
    private dialog: MdDialog) {
    super('Jeopardy');
  }

  ngOnInit(): void {


    this.pushSub(this.jeopardyService.getAll().subscribe(response => {
      console.log(response);
      this.processResponse(response);
      if (response.success) {
        this._jeopardies = response.body;
        this.jeopardies.next(this._jeopardies);
      }
    }));
  }

  addClick(): void {
  }

  deleteClick() {
  }

  onRowClicked(jeopardy: Jeopardy) {
    type deletedType = { request: Request, deleted: boolean };
    var sub = this.dialog.open(JeopardyEditComponent, {
      width: '50%',
      data: {
        jeapordy: jeopardy
      }
    }).afterClosed().subscribe((updatedRequest: Request | string | deletedType) => {

    });
    this.pushSub(sub);
  }

}