import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Card} from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];
  cards: Array<Card>;

  addCard() {
    this.taskList.push(this.newTask);
    this.taskList.push('pop');
    this.newTask = '';
    console.log(this.taskList);
  }
  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }

   getPosts() {
  this.httpService.getPosts().subscribe(post => {
    this.cards = post;
  });
  console.log('lalal');
  }
  postCard() {}
}
