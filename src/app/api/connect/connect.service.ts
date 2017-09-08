import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ApiService } from '../api.service';
import { AccountService } from "../account/account.service";

import { Response, ResponseObservable } from '../api.model';
import { ConnectToken } from './connect.model';

@Injectable()
export class ConnectService {

  private readonly loginHeaders = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(private apiService: ApiService, private accountService: AccountService) {
  }

  /**
   * Logs the user in and sets the token automatically for all subsequent calls through the api services.
   * @param email The user email
   * @param password The user password
   */
  public login(email: string, password: string, remember: boolean): ResponseObservable<ConnectToken> {
    //the login call doesn't accept json so we use custom headers
    return this.apiService.postForm<ConnectToken>({
      username: email,
      password: password,
      grant_type: 'password'
    }, 'connect/token', this.loginHeaders).map((response: Response<ConnectToken> | ConnectToken) => {
      //if access_token exists on the object map it to a response object
      if ('access_token' in response) {
        return <Response<ConnectToken>> {
          success: true,
          body: response
        };
      } else { // else just return the orig response. probably errored
        return <Response<ConnectToken>> response;
      }
    }).do((response: Response<ConnectToken>) => {
      //set our token for api calls
      if (response.success) {
        this.apiService.setToken(response.body.access_token, remember);
      }
    }).flatMap((response: Response<ConnectToken>) => {
      //get our initial account information
      if (!response.success) {
        return Observable.of(response);
      }
      return this.accountService.get().map(() => response);
    });
  }

  /**
   * Logs the user out.
   */
  public logout() {
    this.apiService.clearToken();
  }

}
