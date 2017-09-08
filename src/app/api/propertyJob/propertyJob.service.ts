import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { PropertyJob } from './propertyJob.model';

@Injectable()
export class PropertyJobService {

  private readonly propertyJobs = {
    0: <PropertyJob>{
      "woId": "BB_4",
      "printNumber": "1",
      "parentEwo": "COFT_4",
      "parentPrintNumber": "1",
      "ecsStatus": "1",
      "ecsType": "0",
      "ecsCategory": "1",
      "appNumberStatus": "Complete",
      "ecsJob": "1",
      "jobPrintRev": "BB_4",
      "vsap": "s"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<PropertyJob> {
    return dummy<PropertyJob>(this.propertyJobs[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<PropertyJob[]> {
    let t = <PropertyJob[]>[];
    let keys = Object.keys(this.propertyJobs);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.propertyJobs[keys[i]]);
    }
    return dummy<PropertyJob[]>(t);
  }
}
