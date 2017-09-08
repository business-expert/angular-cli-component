import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';

import { Clli } from './clli.model';


@Injectable()
export class ClliService {  
  private readonly cllis = {
    0: <Clli>{
      "itemValue": "NYCXNYCI",
      "itemDisplay": "NYCXNYCI"
    },
    1: <Clli>{
      "itemValue": "NYCXNYCR",
      "itemDisplay": "NYCXNYCR"
    },
    2: <Clli>{
      "itemValue": "NYCXNYGC",
      "itemDisplay": "NYCXNYGC"
    },
    3: <Clli>{
      "itemValue": "NYCXNYHO",
      "itemDisplay": "NYCXNYHO"
    }
  }
  
  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(boro: string): ResponseObservable<Clli> {
    return this.apiService.get<Clli>("api/cllis/Bronx");
  }  

  @Authorize()
  public getCllis(): ResponseObservable<Clli[]> {
    let t = <Clli[]>[];
    let keys = Object.keys(this.cllis);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.cllis[keys[i]]);
    }
    return dummy<Clli[]>(t);
  }
}
