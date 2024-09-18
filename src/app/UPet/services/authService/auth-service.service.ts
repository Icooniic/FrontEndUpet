import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService extends BaseService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/auth';
  }
  signIn(data: any) {
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/sign-in`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  signUp(data: any) {
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/sign-up`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
