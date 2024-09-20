import { Injectable } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicalService extends BaseService<any>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/medicalhistories';
  }
  getMedicalHistory(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/pet/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }
  creatVaccine(data:any,id:number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${id}/vaccines`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }
  createSurgeries(data:any,id:number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${id}/surgeries`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }
  createDisease(data:any,id:number){
    return this.http.post(`${this.basePath}${this.resourceEndpoint}/${id}/diseases`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getVaccines(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/${id}/vaccines`, this.httpOptions)

  }
  getSurgeries(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/${id}/surgeries`, this.httpOptions)
  }
  getDiseases(id:number){
    return this.http.get(`${this.basePath}${this.resourceEndpoint}/${id}/diseases`, this.httpOptions)
  }

}
