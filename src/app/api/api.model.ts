import { Observable } from 'rxjs/Observable';


export interface ResponseObservable<T> extends Observable<Response<T>> {}

export abstract class Response<T> {

    public success: boolean;
    public body: T;
    public modelErrors: ErrorMessage[];
    public errors: ErrorMessage[];

}

export class ErrorMessage {

    public field: string;
    public errors: string[];

}