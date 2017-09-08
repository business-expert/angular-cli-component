import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ErrorComponent } from './component/error.component';
import { TableComponent } from './table/table.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ErrorComponent,
    TableComponent,
    PanelComponent
  ],
  exports: [ 
    FormsModule,
    MaterialModule,
    ErrorComponent,
    TableComponent,
    PanelComponent
  ]
})
export class SharedModule { }
