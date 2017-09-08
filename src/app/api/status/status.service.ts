import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';

import { Status } from './status.model';


@Injectable()
export class StatusService {  
 private readonly statuses = {
    0: <Status>{
      "itemValue": "0",
      "itemDisplay": "ALL"
    },
    1: <Status>{
      "itemValue": "1",
      "itemDisplay": "IVAPP Valid"
    },
    2: <Status>{
      "itemValue": "2",
      "itemDisplay": "In CXM"
    },
    3: <Status>{
      "itemValue": "3",
      "itemDisplay": "In Path"
    }
  }

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(): ResponseObservable<Status> {
    return this.apiService.get<Status>("api/statuses");
  }  

  @Authorize()
  public getStatuses(): ResponseObservable<Status[]> {
    let t = <Status[]>[];
    let keys = Object.keys(this.statuses);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.statuses[keys[i]]);
    }
    return dummy<Status[]>(t);
  }


}
