import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { myURL } from './url.model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  
  postUrl : string = 'http://localhost:3000/api/item';

  addURL (url: myURL): Observable<any> {
    return this.http.post<myURL>(this.postUrl, url);
      
  }
}
