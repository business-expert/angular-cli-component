import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { JeopardyListComponent } from './component/jeopardy.list.component';
import { JeopardyEditComponent } from "./component/jeopardy.edit.component";


//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    JeopardyListComponent,
    JeopardyEditComponent
  ],
  exports: [
    JeopardyListComponent,
    JeopardyEditComponent
  ],
  entryComponents: [JeopardyEditComponent]
})
export class JeopardyModule { }