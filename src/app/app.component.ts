import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'engCardsFrontend';

  constructor(private httpService: HttpService) { }

  getPosts() {
    this.httpService.getPosts().subscribe(post =>
      console.log(post));
  }
}
