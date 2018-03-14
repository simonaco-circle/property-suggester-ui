import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'https://ukrent.azurewebsites.net/api/RentalsService';
@Injectable()
export class ListingsService {
  constructor(private http: Http) {}

  getListings(area: string, listing_status: string, order_by: string) {
    const options = new RequestOptions({
      params: {
        area: area,
        listing_status: listing_status,
        order_by: order_by
      }
    });
    return this.http
      .get(API_URL, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
