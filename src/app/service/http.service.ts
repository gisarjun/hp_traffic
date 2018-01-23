import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  public config: any;

  constructor(private http: Http) {}

  getJSON() {
    return this.http.get('assets/config/config.json')
      .map((response: Response) => {
        if (response.status === 404) {
          console.error('No Such Json');
        } else {
          return response.json();
        }
      });
  }

  get(url, queryParams) {
    const sentQuery = {};
    if (typeof queryParams === 'object') {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          sentQuery[key] = queryParams[key];
        }
      }
    }
    const requestOptions = new RequestOptions({ params: sentQuery});
    return this.http.get(url, requestOptions)
                .map((response: Response) => {
                  if (response.status === 403 || response.status === 401) {
                    console.error('error');
                  } else {
                    return response.json();
                  }
                });
  }

  post(url, postData) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(url, postData, { headers: headers})
      .map((response: Response) => {
        if (response.status === 403 || response.status === 401) {
            console.error('error');
        } else {
          return response.json();
        }
      });
  }


}
