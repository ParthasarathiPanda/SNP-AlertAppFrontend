import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private _http: HttpClient) { }

  public AdminLoginFromBackend(admin: Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8089/login",admin,{responseType: 'text' as 'json'});
  }
}
