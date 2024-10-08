import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService  extends BaseService<any>{


  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/petowners';
  }
  signUp(data:any, user_id: number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${user_id}`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getOwner(id: number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/users/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
