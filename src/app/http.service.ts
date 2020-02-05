import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from './models/card';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>('http://localhost:8080/api/cards');
  }
}


