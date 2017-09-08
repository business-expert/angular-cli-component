import { Observable } from "rxjs/Observable";

import { AppStateService } from "../state/state.service";
import { stateAuth, stateAccount } from "../state/state";

import { Account } from './account/account.model';

export function Authorize(roles?: string[]) {
    return function (targetedClass: Object, propertyName: string) {
        decorator(propertyName, propertyName, targetedClass, roles);
    };
}

const unauthorizedError = <any>{
    success: false,
    errors: [
        {
            field: 'Unauthorized',
            errors: [' Please login again. ']
        }
    ]
};

const permissionsError = <any>{
    success: false,
    errors: [
        {
            field: 'AuthorizationError',
            errors: [' You do not have permissions to do this. ']
        }
    ]
};

function decorator(key: string, propertyName: string, targetedClass: Object, roles?: string[]): void {
    key = key || propertyName;
    let existingFunc = <Function> targetedClass[propertyName];
    Object.defineProperty(targetedClass, propertyName, {
        get: function () {
            let authorized = AppStateService.getValue<boolean>(stateAuth);
            if (!authorized) {
                return Observable.of(unauthorizedError);
            }
            if (!checkRoles(roles)) {
                return Observable.of(permissionsError);
            }
            return existingFunc.apply(this, arguments);
        },
        set: function (value) {
            throw new Error("Readonly function.");
        }
    });
}

function checkRoles(roles?: string[]): boolean {
    if (roles == null || roles.length == 0) {
        return true;
    }
    let account = AppStateService.getValue<Account>(stateAccount);
    for(var role in roles) {
        for(var checkRole in account.roles) {
            if (role.toLowerCase() == checkRole.toLowerCase()) {
                return true;
            }
        }
    }
    return false;
}