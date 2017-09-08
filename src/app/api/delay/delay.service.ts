import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { Delay } from "./delay.model";


@Injectable()
export class DelayService {

  private readonly delays = {
    0: <Delay>{
      "recId": "3",
      "trackerId": "2857",
      "delayDate": "08/17/2010",
      "delayReason": "ROW Issue",
      "dateEffected": "September 2010",
      "userId": "Kevin G"
    },
    1: <Delay>{
      "recId": "2",
      "trackerId": "2857",
      "delayDate": "08/17/2010",
      "delayReason": "CO Issue",
      "dateEffected": "August 2010",
      "userId": "Kevin G"
    },
    2: <Delay>{
      "recId": "8",
      "trackerId": "2857",
      "delayDate": "08/26/2010",
      "delayReason": "CXM Force Issues",
      "dateEffected": "October 2010",
      "userId": "Chris"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<Delay> {
    return dummy<Delay>(this.delays[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<Delay[]> {
    let t = <Delay[]>[];
    let keys = Object.keys(this.delays);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.delays[keys[i]]);
    }
    return dummy<Delay[]>(t);
  }
}
