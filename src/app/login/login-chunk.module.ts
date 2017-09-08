import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './component/login.component';

import { router } from './login.routing';

//The separate login chunk module.
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    router
  ],
  declarations: [ 
    LoginComponent
  ]
})
export class LoginChunkModule { }
