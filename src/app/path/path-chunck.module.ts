import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PathComponent } from './path.component';

//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
    PathComponent
  ],
  exports: [ 
    PathComponent
  ],
})
export class PathChunkModule { }