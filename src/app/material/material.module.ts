import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdCoreModule, 
  MdButtonModule, 
  MdMenuModule,
  MdCardModule, 
  MdToolbarModule, 
  MdIconModule,
  MdInputModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSidenavModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdListModule,
  MdTableModule,
  MdSelectModule,
  MdTabsModule,
  MdPaginatorModule,
  MdDialogModule,
  MdCheckboxModule,
  MdSnackBarModule,
  MdDatepickerModule
 } from '@angular/material';

 import { CdkTableModule } from '@angular/cdk'

import { FlexLayoutModule } from '@angular/flex-layout';


//Base module for exposing all of the material components.
@NgModule({
  imports: [
    MdCoreModule,     
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdListModule,
    MdTableModule,
    MdPaginatorModule,
    CdkTableModule,
    MdSelectModule,
    MdTabsModule,
    MdDialogModule,
    MdCheckboxModule,
    MdSnackBarModule,
    FlexLayoutModule,
    MdDatepickerModule
  ],
  exports: [
    MdCoreModule,     
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdListModule,
    MdTableModule,
    MdPaginatorModule,
    CdkTableModule,
    MdSelectModule,
    MdTabsModule,
    MdDialogModule,
    MdCheckboxModule,
    MdSnackBarModule,
    FlexLayoutModule,
    MdDatepickerModule
  ],
})
export class MaterialModule { }
