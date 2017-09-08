import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BaseComponent } from '../shared/base.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DisplayItemService } from "../api/displayItem/displayItem.service";
import { DisplayItem } from "../api/displayItem/displayItem.model";


@Component({
  selector: 'tn-details',
  templateUrl: './details.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {    
  stagings: Observable<DisplayItem[]>;
  doorServices: Observable<DisplayItem[]>;
  internalFiberTypes: Observable<DisplayItem[]>;
  myDate: Date

  constructor(private displayItemService: DisplayItemService) {
    super('Details');
  } 

  ngOnInit(): void {
    this.stagings = this.displayItemService.getStagings().map(response => response.body);    
    this.doorServices = this.displayItemService.getDoorServices().map(response => response.body);    
    this.internalFiberTypes = this.displayItemService.getInternalFiberTypes().map(response => response.body);    
  }

}