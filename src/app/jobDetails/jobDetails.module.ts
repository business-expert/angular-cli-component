import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JobDetailsComponent } from "./component/jobDetails.component";



//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    JobDetailsComponent
  ],
  exports: [
    JobDetailsComponent
  ]
})
export class JobDetailsModule { }