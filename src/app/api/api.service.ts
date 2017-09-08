import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';

import { LocalStorage, SessionStorage } from 'ngx-webstorage';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { environment } from '../../environments/environment';

import { AppState, StateMode } from '../state/decorators/state.decorator';
import { stateAuth } from '../state/state';

import { Response as ApiResponse, ResponseObservable } from './api.model';

let baseUrl = environment.api;
if (!baseUrl.endsWith('/'))
  baseUrl += '/';

export function dummy<T>(body: T): ResponseObservable<T> {
  return Observable.of(<any>{
    success: true,
    body: body
  }).delay(500);
}

@Injectable()
export class ApiService {

  @LocalStorage()
  private savedToken: string;
  @SessionStorage()
  private token: string;

  @AppState(stateAuth, StateMode.ReadWrite)
  private authorized: boolean;

  private defaultHeaders: Headers = new Headers({
    "Content-Type": "application/json"
  });

  constructor(private http: Http) {
    this.authorized = this.savedToken != null;
  }

  public setToken(token: string, remember: boolean) {
    this.token = token;
    this.authorized = true;
    this.defaultHeaders.append("Authorization", "Bearer " + token);
    this.savedToken = remember ? token : null;
  }

  public clearToken() {
    this.token = null;
    this.authorized = false;
    this.defaultHeaders.delete("Authorization");
    this.savedToken = null;
  }

  public get<T>(url: string, params?: { [key: string]: any }, headers?: Headers): ResponseObservable<T> {
    url = this.buildUrl(url);
    return this.http.get(url, { params: params, headers: headers || this.defaultHeaders })
      .flatMap<Response, T>(this.mapResponse)
      .catch<any, T>(this.mapErrorResponse);
  }

  public post<T>(body: any, url: string, headers?: Headers): ResponseObservable<T> {
    url = this.buildUrl(url);
    return this.http.post(url, body, { headers: headers || this.defaultHeaders })
      .flatMap<Response, T>(this.mapResponse)
      .catch<any, T>(this.mapErrorResponse);
  }

  public postForm<T>(body: { [key: string]: any }, url: string, headers?: Headers): ResponseObservable<T> {
    url = this.buildUrl(url);
    var params = new URLSearchParams();
    for (var key in body) {
      params.append(key, body[key]);
    }
    return this.http.post(url, params, { headers: headers || this.defaultHeaders })
      .flatMap<Response, T>(this.mapResponse)
      .catch<any, T>(this.mapErrorResponse);
  }

  private buildUrl(url: string): string {
    return baseUrl + url;
  }

  private mapResponse<T>(response: Response): Observable<T> {
    console.log(response);
    return Observable.of(response.json());
  }

  private mapErrorResponse<T>(response: Response): Observable<T> {
    //if the body type is a progress event it means no connection was made.
    var body = response.json();
    console.log(body);
    if (body instanceof ProgressEvent) {
      //TODO raise no internet error.
      return Observable.of(<any>{
        success: false,
        errors: [
          {
            field: 'Error',
            errors: ['Check your internet connection.']
          }
        ]
      });
    }
    return Observable.of(body).map(obj => <T>obj);
  }

}
