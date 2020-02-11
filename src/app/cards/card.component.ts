import {Component, Injectable, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Card} from '../models/card';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CardService} from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
@Injectable()
export class CardComponent implements OnInit {
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
    this.cardService.getPosts().subscribe(post => {
      this.cards = post;
    });
    console.log('lalal');
  }

  coverCards() {
    this.cardService.getPosts().subscribe(post => {
      this.cards = post;
    });
    console.log('lalal');
  }
}
