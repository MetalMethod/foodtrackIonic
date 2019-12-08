import { Component } from '@angular/core';
import {STATE} from './orders/state';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  

  public orderList: any = [
    {id: "29734", name: "Big Mac", price: 5.99, user: "DiogoN", state: STATE.COOKING, image: "1"},
    {id: "98312", name: "Chicken Nuggets", price: 4.39,  user: "Asgard",state: STATE.COOKING, image: "2"},
    {id: "42355", name: "Javas com Chouriço", price: 8.99,  user: "RogueLiker", state: STATE.COOKING, image: "3"},
    {id: "19347", name: "Cozido a Portuguesa", price: 12.40,  user: "Megaman2", state: STATE.COOKING, image: "4"},
  ];

  constructor() {

  }




}
