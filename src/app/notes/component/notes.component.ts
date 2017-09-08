import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseComponent } from "../../shared/base.component";
import { TrackerNoteService } from "../../api/trackerNote/trackerNote.service";
import { EcsNoteService } from "../../api/ecsNote/ecsNote.service";
import { TrackerNote } from "../../api/trackerNote/trackerNote.model";
import { EcsNote } from "../../api/ecsNote/ecsNote.model";


@Component({
  selector: 'tn-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent extends BaseComponent implements OnInit {  
 trackerNote: Observable<TrackerNote>;
 ecsNotes: Observable<EcsNote[]>;
  

  constructor(private _trackerNoteService: TrackerNoteService, private _ecsNoteService: EcsNoteService) {
    super('Notes');
  }

  ngOnInit(): void {   
    this.trackerNote = this._trackerNoteService.get(0).map(response => response.body);
    this.ecsNotes = this._ecsNoteService.getAll().map(response => response.body);    
  }
}