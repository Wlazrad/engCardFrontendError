import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Card} from '../models/card';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];
  cards: Array<Card>;
  card: Card;
  cardForm: FormGroup;

  addCard() {
    this.taskList.push(this.newTask);
    this.taskList.push('pop');
    this.newTask = '';
    console.log(this.taskList);
  }

  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.cardForm = this.buildCardForm();
  }

  buildCardForm() {
    return this.formBuilder.group({
      hearWord: '',
      polishWord: '',
      pureWord: '',
      story: '',
    });
  }


  getPosts() {
    this.httpService.getPosts().subscribe(post => {
      this.cards = post;
    });
    console.log('lalal');
  }

  postCard() {
    this.httpService.addCards(this.card).subscribe(card => {
      this.card = card;
    });
  }
}
