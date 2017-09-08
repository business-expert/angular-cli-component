import { Injectable } from '@angular/core';
import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';
import { TrackerNote } from './trackerNote.model';

@Injectable()
export class TrackerNoteService {

  private readonly trackerNotes = {
    0: <TrackerNote>{
      "callNotes": "This is a call note",
      "undergroundNotes": "This is an underground note"
    }
  };

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<TrackerNote> {
    return dummy<TrackerNote>(this.trackerNotes[id]);
  }


  @Authorize()
  public getAll(): ResponseObservable<TrackerNote[]> {
    let t = <TrackerNote[]>[];
    let keys = Object.keys(this.trackerNotes);
    let ptr = 0;
    for (var i = 0; i < keys.length; i++) {
      t.push(this.trackerNotes[keys[i]]);
    }
    return dummy<TrackerNote[]>(t);
  }
}
