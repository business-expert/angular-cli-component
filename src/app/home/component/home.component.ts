import { Component, OnInit } from '@angular/core';
import { style, trigger, animate, transition, state } from '@angular/animations';

import { BaseComponent } from '../../shared/base.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  progress = false;

  constructor() {
    super('Home');
  }

  ngOnInit() {

  }

}
