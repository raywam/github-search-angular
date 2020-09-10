import { Injectable } from '@angular/core';
import { AppService } from './service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService extends AppService {

  constructor(public _http: HttpClient) {
    super('users', _http);
  }

  getUserRepos(username): Observable<any> {
    const url = this.getServerAPI();
    const options = this.getHttpHeaderOptions();
    return this._http.get(`${url}/${username}/repos`, options);
  }
}
