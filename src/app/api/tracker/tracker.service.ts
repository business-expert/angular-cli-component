import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { Tracker } from './tracker.model';




@Injectable()
export class TrackerService {  

    private readonly trackers = {
      0: <Tracker> {
        "trackerId": "1",
        "mduAddress": "123 big street",
        "clli": "NYCMNY13",
        "blockLotNumber": "123456789",
        "specialId": "big",
        "docStatus": "pending",
        "lus": "24",
        "jeopardy": "j",
        "reviewed": "r",
        "staged": "s",
        "mduPropertyId": "mpid",
        "phaseNumber": "pn",        
        "nsis": "8",
        "marketPriority": "1",
        "seventeenK": "2",
        "nintyFivePercent": "3"
      },
      1: <Tracker> {
        "trackerId": "1",
        "mduAddress": "123 big street",
        "clli": "NYCMNY13",
        "blockLotNumber": "123456789",
        "specialId": "big id",
        "docStatus": "pending",
        "lus": "24",
        "jeopardy": "j",
        "reviewed": "r",
        "staged": "s",
        "mduPropertyId": "mpid",
        "phaseNumber": "pn",        
        "nsis": "8",
        "marketPriority": "1",
        "seventeenK": "2",
        "nintyFivePercent": "3"
      },
      2: <Tracker> {
        "trackerId": "1",
        "mduAddress": "123 big street",
        "clli": "NYCMNY13",
        "blockLotNumber": "123456789",
        "specialId": "small id",
        "docStatus": "pending",
        "lus": "24",
        "jeopardy": "j",
        "reviewed": "r",
        "staged": "s",
        "mduPropertyId": "mpid",
        "phaseNumber": "pn",        
        "nsis": "8",
        "marketPriority": "1",
        "seventeenK": "2",
        "nintyFivePercent": "3"
      }
    };

  constructor(private apiService: ApiService) { }

   @Authorize()
  public get(id: number): ResponseObservable<Tracker> {
    return dummy<Tracker>(this.trackers[id]);
  }


  @Authorize()
  public getAll(start = 0, end = 2): ResponseObservable<Tracker[]> {
    let t = <Tracker[]> [];
    let keys = Object.keys(this.trackers);
    let ptr = 0;
    while(end-- > 0 && ptr < keys.length) {
      t.push(this.trackers[keys[ptr++]]);

    return dummy<Tracker[]>(t);
  }  


  }
}
