import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { Ng2Webstorage } from 'ngx-webstorage';

import { SharedModule } from './shared/shared.module';
import { ApiModule } from './api/api.module';

import { AppComponent } from './app.component';

import { router, providers } from './app.routing';

import 'hammerjs';
import { TopnavComponent } from './topnav/topnav.component';
import { FormsModule } from '@angular/forms';
import { MdNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    Ng2Webstorage.forRoot({ prefix: 'kultera', separator: '.', caseSensitive: true }),
    ApiModule,
    SharedModule,
    router,
    FormsModule,
    MdNativeDateModule
  ],
  providers: [ 
    ...providers
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
