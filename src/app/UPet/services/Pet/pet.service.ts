import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService  extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/pets';
  }
  getPets(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createPet(data:any,id:number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${id}`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
