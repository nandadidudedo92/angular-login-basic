import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }
  
  public loginUserFromRemote(user: User):Observable<any>{
   
    return this._http.post<any>("/api/register", user)
 
   }
}
