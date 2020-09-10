import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService {

  constructor(public _http: HttpClient) {
    super('users', _http);
  }



  getUser(username): Observable<any> {
    const url = this.getServerAPI();
    const options = this.getHttpHeaderOptions();
    return this._http.get(`${url}/${username}`, options);
  }
}
