import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NotesComponent } from "./component/notes.component";



//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NotesComponent
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }