import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Array<Card>> {
   return  this.http.get<Array<Card>>('http://localhost:8080/api/cards');
  }
}

export interface Card {
  id?: number;
  pureWord?: string;
  hearWord?: string;
  polishWord?: string;
  story?: string;
}

