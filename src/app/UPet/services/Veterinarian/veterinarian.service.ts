import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/veterinarians';
  }
  signUp(data:any, user_id: number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${user_id}`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getVet(id: number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/users/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getVets(){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
