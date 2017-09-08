import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BaseComponent } from '../shared/base.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DisplayItemService } from "../api/displayItem/displayItem.service";
import { DisplayItem } from "../api/displayItem/displayItem.model";


@Component({
  selector: 'tn-path',
  templateUrl: './path.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent extends BaseComponent implements OnInit {  
  pathCreateRequireds: Observable<DisplayItem[]>;
  pathVendors: Observable<DisplayItem[]>;
  pathStatuses : Observable<DisplayItem[]>;
  pathMoldingVendors : Observable<DisplayItem[]>;
  pathMoldingStatuses : Observable<DisplayItem[]>;
  deploymentPractices : Observable<DisplayItem[]>;
  pathCreateMethods: Observable<DisplayItem[]>;

  myDate: Date

  constructor(private displayItemService: DisplayItemService) {
    super('Path');
  }

  ngOnInit(): void {    
    this.pathCreateRequireds = this.displayItemService.getPathcreaterequireds().map(response => response.body);
    this.pathVendors = this.displayItemService.getPathvendors().map(response => response.body);
    this.pathStatuses = this.displayItemService.getPathstatuses().map(response => response.body);
    this.pathMoldingVendors = this.displayItemService.getPathmoldingvendors().map(response => response.body);
    this.pathMoldingStatuses = this.displayItemService.getPathmoldingstatus().map(response => response.body);
    this.deploymentPractices = this.displayItemService.getDeploymentpractices().map(response => response.body);
    this.pathCreateMethods = this.displayItemService.getPathcreatemethods().map(response => response.body);
  }

}