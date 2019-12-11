import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];



  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
    console.log(this.taskList);
  }
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getPosts() {
  this.httpService.getPosts().subscribe(post =>
  console.log(post));
  console.log('lalal');
  }
}
