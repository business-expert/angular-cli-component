import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { Jeopardy } from './jeopardy.model';

@Injectable()
export class JeopardyService {

  private readonly jeopardies = {
    0: <Jeopardy>{
      "recId": "5981",
      "trackerId": "646",
      "jeopardyId": "14",
      "jeopardy": "Big Jeopardy",
      "ownerId": "2 ",
      "owner": "big owner",
      "systemNote": "big system note",
      "ewo": "FromOld_A",
      "printNum": "1",
      "inactive": "2017-04-19 17:23:00"
    },
    1: <Jeopardy>{
      "recId": "5982",
      "trackerId": "646",
      "jeopardyId": "14",
      "jeopardy": "Big Jeopardy 2",
      "ownerId": "2 ",
      "owner": "big owner",
      "systemNote": "big system note",
      "ewo": "FromOld_A",
      "printNum": "1",
      "inactive": "2017-04-19 17:23:00"
    },
    2: <Jeopardy>{
      "recId": "5983",
      "trackerId": "646",
      "jeopardyId": "14",
      "jeopardy": "Big Jeopardy 3",
      "ownerId": "2 ",
      "owner": "big owner",
      "systemNote": "big system note",
      "ewo": "FromOld_A",
      "printNum": "1",
      "inactive": "2017-04-19 17:23:00"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<Jeopardy> {
    return dummy<Jeopardy>(this.jeopardies[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<Jeopardy[]> {
    let t = <Jeopardy[]>[];
    let keys = Object.keys(this.jeopardies);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.jeopardies[keys[i]]);
    }
    return dummy<Jeopardy[]>(t);
  }
}
