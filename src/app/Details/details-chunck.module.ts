import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details.component';

//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
    DetailsComponent
  ],
  exports: [ 
    DetailsComponent
  ],
})
export class DetailsChunkModule { }