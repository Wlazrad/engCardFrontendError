import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card';

let input = Input;

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})
export class CardsListComponent implements OnInit {

  cardList: Array<string> = [];
 @Input() cards: Array<Card>;
  constructor() { }

  ngOnInit() {
  }

}
