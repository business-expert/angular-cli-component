import { Injectable } from '@angular/core';

import { ApiService, dummy } from '../api.service';
import { ResponseObservable } from '../api.model';
import { Authorize } from '../api.authorize';

import { Boro } from './boro.model';


@Injectable()
export class BoroService {  

  constructor(private apiService: ApiService) { }

  @Authorize()
  public get(id: number): ResponseObservable<Boro> {
    return this.apiService.get<Boro>("api/boros/1");
  }  


}