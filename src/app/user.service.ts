import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public UserLoginFromBackend(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8089/user/login",user,{responseType: 'text' as 'json'});
  }
}
