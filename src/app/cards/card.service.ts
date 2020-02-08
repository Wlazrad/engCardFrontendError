import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8080/api/cards';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>('http://localhost:8080/api/cards');
  }

  getPosts(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>('http://localhost:8080/api/cards');
  }

  addCard(data): Observable<Card> {
    this.getPosts();
    return this.http.post(this.apiUrl, data);
  }
}

