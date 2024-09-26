import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8089/api/alerts/GetByMachineName";
  private url2="http://localhost:8089/api/exportpdf";

  public getAlertByMachineName(machinename: any):Observable<Alert[]>{
    console.log("inside service: "+machinename);
    return this.http.get<any>(`${this.url}/${machinename}`);
  }

  downloadAlertByMachineName(machineName: string): Observable<Blob> {
    const apiUrl = `${this.url2}/${machineName}`;
    return this.http.get(apiUrl, { responseType: 'blob' });
  }

}
