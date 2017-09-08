import { OnDestroy } from '@angular/core';
import { FormControl, NgModel } from "@angular/forms";

import { Subscription } from 'rxjs/Subscription';

import { environment } from '../../environments/environment';

import { Response } from '../api/api.model';
import { Account } from '../api/account/account.model';
import { AppState, StateMode } from '../state/decorators/state.decorator';
import { stateAuth, stateAccount, stateRoute } from '../state/state';

const errorMessages = {
    required: 'This field is required'
};

export class BaseComponent implements OnDestroy {

    private subscriptions: Subscription[] = [];
    private apiModelErrors: { [key: string]: string[] } = {};
    
    errors: string[] = [];

    environment = environment;

    @AppState(stateAuth)
    authorized: boolean;
    @AppState(stateAccount)
    account: Account;
    @AppState(stateRoute, StateMode.ReadWrite)
    currentRouteName: string;

    constructor(currentRouteName?: string) {
        if (currentRouteName != null) {
            this.currentRouteName = currentRouteName;
        }
    }

    /**
     * Returns true or false if the form model has an error. Called from templates.
     * @param model The form model to check errors against
     */
    public errorStateMatcher = (model: NgModel): boolean => {
        //check any errors from the api
        let apiErrors = this.apiModelErrors[model.name];
        if (apiErrors != null && apiErrors.length > 0) {
            return true;
        }
        return model.errors && (model.dirty || model.touched);
    }

    /**
     * Gets the first error for the model.
     * @param model The form model to get errors for
     */
    public getErrorMessage(model: NgModel): string {
        //ignore on untouched
        if (model.untouched) {
            return null;
        }

        //check any errors from the api
        let apiErrors = this.apiModelErrors[model.name];
        if (apiErrors != null && apiErrors.length > 0) {
            return apiErrors[0];
        }

        //checks the client side validation
        if (model.valid) {
            return null;
        }
        for (let err in model.errors) {
            if (model.errors[err]) {
                return errorMessages[err];
            }
        }

        return null;
    }

    /**
     * Clears all of the errors from the ui.
     */
    protected clearErrors(): void {
        //reset the errors
        this.apiModelErrors = {};
        this.errors.splice(0);
    }

    /**
     * Reads the response and populates the error lists on this component
     * TODO clean up the logic in this method. its kind of confusing.
     * @param response The response to read errors from
     */
    protected processResponse(response: Response<any>): void {
        this.clearErrors();

        //we dont care if the response is a success or there are no errors
        if (response.success) {
            return;
        }

        //we have to have an error if success = false. so check the errors properties
        var foundError = false;

        if (response.errors != null) {
            //populate general errors.
            for (let err of response.errors) {
                this.errors.push(...err.errors);
                foundError = true;
            }
        }

        if (response.modelErrors != null) {
            //populate model errors
            for (let err of response.modelErrors) {
                let arr = this.apiModelErrors[err.field];
                if (arr == null) {
                    arr = this.apiModelErrors[err.field] = [];
                }
                arr.push(...err.errors);
                foundError = true;
            }
        }

        //if we finally didnt find an error display a generic one
        if (!foundError) {
            this.errors.push("An unknown error occured.");
        }
    }

    protected pushSub(sub: Subscription) {
        this.subscriptions.push(sub);
    }

    public ngOnDestroy() {
        for (let sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }

}
