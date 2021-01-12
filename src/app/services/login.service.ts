import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
   
   return this._http.post<any>("/api/login", user)

  }

}
