import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { APP_CONFIG } from '../../assets/config/app.config';

export class AppService {
  private resource: string;
  private http: HttpClient;
  public request = {
    get(base: string, uri: string, options: any): Observable<any> {
      return null;
    },
    api: {
      get(uri: string, options: any): Observable<any> {
        return this.request.get(APP_CONFIG.APP_VERSION, uri, options);
      }
    },
  };

  constructor(
    resource: string,
    http: HttpClient
  ) {
    this.resource = resource;
    this.http = http;
    this.request.get = (
      base: string,
      uri: string,
      options: any
    ): Observable<any> => {
      return this.http.get(`${base}${uri}`, options);
    };
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getServerAPI() {
    return `${APP_CONFIG.APP_VERSION}/${this.resource}`;
  }

  getHttpHeaderOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return { headers: httpOptions.headers };
  }

}
