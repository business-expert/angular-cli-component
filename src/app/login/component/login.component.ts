import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { style, trigger, animate, transition, state } from '@angular/animations';

import 'rxjs/add/operator/toPromise';

import { animateFactory } from 'ng2-animate';

import { ConnectService } from '../../api/connect/connect.service';

import { BaseComponent } from '../../shared/base.component';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  progress = false;

  email: string;
  password: string;
  remember: boolean;

  constructor(private connectService: ConnectService, private router: Router) {
    super();
  }

  ngOnInit() {

  }

  async login(): Promise<void> {
    this.progress = true;

    this.clearErrors();
    let response = await this.connectService.login(this.email, this.password, this.remember).toPromise();
    this.processResponse(response);
    this.progress = false;

    console.log(this.account);
    if (response.success) {
      //TODO redirect.
      console.log(this.remember);
      this.router.navigateByUrl('home');
      this.email = null;
      this.password = null;
    } else {
      //show errors somehow.
    }
  }

}
