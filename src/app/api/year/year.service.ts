import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';

import { Year } from './year.model';


@Injectable()
export class YearService {  
  private readonly years = {
    0: <Year>{
      "itemValue": "2013",
      "itemDisplay": "2013"
    },
    1: <Year>{
      "itemValue": "2014",
      "itemDisplay": "2014"
    },
    2: <Year>{
      "itemValue": "2015",
      "itemDisplay": "2015"
    },
    3: <Year>{
      "itemValue": "2016",
      "itemDisplay": "2016"
    }
  }

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(): ResponseObservable<Year> {
    return this.apiService.get<Year>("api/years");
  }  

  @Authorize()
  public getYears(): ResponseObservable<Year[]> {
    let t = <Year[]>[];
    let keys = Object.keys(this.years);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.years[keys[i]]);
    }
    return dummy<Year[]>(t);
  }

}
