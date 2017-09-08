import { Component } from '@angular/core';

import { LocalStorage } from 'ngx-webstorage';

import { BaseComponent } from './shared/base.component';
import { BoroService } from "./api/boro/boro.service";
import { Boro } from "./api/boro/boro.model";
import { ClliService } from "./api/clli/clli.service";
import { Clli } from "./api/clli/clli.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  

  @LocalStorage(null, true)
  sideNavOpened: boolean;

  constructor(private boroService: BoroService, private clliService: ClliService) {
    super();
  }

  toggleNavState(opened: boolean): void {
    this.sideNavOpened = opened;
  }


  ngOnInit(): void { 
    
  }

}
