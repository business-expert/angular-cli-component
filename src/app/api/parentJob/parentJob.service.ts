import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { ParentJob } from './parentJob.model';

@Injectable()
export class ParentJobService {

  private readonly parentJobs = {
    0: <ParentJob>{
      "parentJob": "COFT_4-1",
      "parentJobId": "COFT_4,1"
    },
    1: <ParentJob>{
      "parentJob": "COFT_4-0",
      "parentJobId": "COFT_4,0"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<ParentJob> {
    return dummy<ParentJob>(this.parentJobs[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<ParentJob[]> {
    let t = <ParentJob[]>[];
    let keys = Object.keys(this.parentJobs);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.parentJobs[keys[i]]);
    }
    return dummy<ParentJob[]>(t);
  }
}
