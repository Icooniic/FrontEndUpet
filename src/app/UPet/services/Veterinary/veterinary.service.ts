import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService extends BaseService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/veterinary_clinics';
  }
  signUp(data:any) {
    return this.http.post(`${this.basePath}${this.resourceEndpoint}`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  uniquePassword(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/generate_password/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getVeterinary(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
