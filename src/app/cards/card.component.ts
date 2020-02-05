import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Card} from '../models/card';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CardService} from './card.service';

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


  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder,
              private cardService: CardService) {
  }

  addCard() {
    this.cardService.addCard(this.cardForm.value).subscribe();
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


}
