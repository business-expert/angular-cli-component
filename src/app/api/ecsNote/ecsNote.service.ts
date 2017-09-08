import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { EcsNote } from './ecsNote.model';

@Injectable()
export class EcsNoteService {

  private readonly ecsNotes = {
    0: <EcsNote>{
      "ecsAppNum": "NM-15-1234",
      "ecsNotes": "Bozena N (05/05/2015): hello test;  ",
      "ecsRecordId": "671"
    },
    1: <EcsNote>{
      "ecsAppNum": "MW-09-3785",
      "ecsNotes": "Bozena N (10/15/2015): hello;  ",
      "ecsRecordId": "509"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<EcsNote> {
    return dummy<EcsNote>(this.ecsNotes[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<EcsNote[]> {
    let t = <EcsNote[]>[];
    let keys = Object.keys(this.ecsNotes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.ecsNotes[keys[i]]);
    }
    return dummy<EcsNote[]>(t);
  }
}
