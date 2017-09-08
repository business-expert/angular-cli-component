import { Injectable } from '@angular/core';

import { ApiService } from "../api.service";
import { Response, ResponseObservable } from "../api.model";

import { Account } from './account.model';
import { stateAccount } from "../../state/state";
import { AppState, StateMode } from "../../state/decorators/state.decorator";
import { LocalStorage } from "ngx-webstorage/dist/app";
import { Authorize } from "../api.authorize";

@Injectable()
export class AccountService {

  @LocalStorage()
  private savedAccount: Account;
  @AppState(stateAccount, StateMode.ReadWrite)
  private account: Account;

  constructor(private apiService: ApiService) {
    this.account = this.savedAccount;
  }

  /**
   * Gets the account info for the logged in user.
   * Will set the account info app wide on the @see authState
   */
  @Authorize()
  public get(): ResponseObservable<Account> {
    return this.apiService.get<Account>('account').do((account: Response<Account>) => { 
      this.account = account.body;
      this.savedAccount = account.body;
    });
  }

}
