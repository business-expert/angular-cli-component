import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TopnavComponent } from './topnav.component'


//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ 
  ]
})
export class TopnavChunkModule { }
