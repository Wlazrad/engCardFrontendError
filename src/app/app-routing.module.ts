import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardsListComponent} from './cards/cards-list/cards-list.component';


const routes: Routes = [
  {
    path: '',
    component: CardsListComponent,
    children: [
      {
        path: '',
        component: CardsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
