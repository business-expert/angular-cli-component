import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MdDialog, MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { BaseComponent } from "../../shared/base.component";
import { DisplayItemService } from "../../api/displayItem/displayItem.service";
import { JeopardyService } from "../../api/jeopardy/jeopardy.service";
import { Jeopardy } from "../../api/jeopardy/jeopardy.model";
import { DisplayItem } from "../../api/displayItem/displayItem.model";



@Component({
    templateUrl: './jeopardy.edit.component.html',
    styleUrls: ['./jeopardy.edit.component.scss']
})
export class JeopardyEditComponent extends BaseComponent implements OnInit {
    jeopardyDescriptions: Observable<DisplayItem[]>;
    jeopardyOwners: Observable<DisplayItem[]>;
    jeopardy: Jeopardy;
    progress: boolean;



    constructor(private displayItemService: DisplayItemService,
        private jeopardyService: JeopardyService,
        @Inject(MD_DIALOG_DATA) public data: { jeopardy: Jeopardy },
        private mdDialogRef: MdDialogRef<JeopardyEditComponent>) {
        super('Jeopardy');
    }

    ngOnInit(): void {
        this.jeopardy = this.data.jeopardy;
        this.jeopardyDescriptions = this.displayItemService.getJeopardDescriptions().map(response => response.body);
        this.jeopardyOwners = this.displayItemService.getJeopardyOwners().map(response => response.body);
    }

    save() {
        this.mdDialogRef.close();
    }

    delete() {
        this.mdDialogRef.close();
    }

}