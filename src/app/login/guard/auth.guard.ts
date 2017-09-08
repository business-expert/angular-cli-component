import { Injectable } from "@angular/core";
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { ApiService } from "../../api/api.service";
import { AccountService } from "../../api/account/account.service";
import { AppState, StateMode } from "../../state/decorators/state.decorator";
import { stateAuth } from "../../state/state";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    @AppState(stateAuth, StateMode.ReadWrite)
    private authorized: boolean;

    //we need these services in the constructor to force a token refresh.
    constructor(private apiService: ApiService, 
        private accountService: AccountService, 
        private router: Router) {
		this.authorized = true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        var canActivate = this.authorized;
        if (!canActivate) {
            this.router.navigateByUrl('login');
        }
        return canActivate;
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        var canLoad = this.authorized;
        if (!canLoad) {
            this.router.navigateByUrl('login');
        }
        return canLoad;
    }

}

@Injectable()
export class ReverseAuthGuard implements CanLoad, CanActivate {

    @AppState(stateAuth)
    private authorized: boolean;

    //we need this in the constructor to force a token refresh.
    constructor(private apiService: ApiService, 
        private accountService: AccountService, 
        private router: Router) {        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        var canActivate = !this.authorized;
        console.log(this.authorized);
        if (!canActivate) {
            this.router.navigateByUrl('login');
        }
        return canActivate;
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        var canLoad = !this.authorized;
        if (!canLoad) {
            this.router.navigateByUrl('login');
        }
        return canLoad;
    }

}