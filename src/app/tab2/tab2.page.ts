import { Component } from '@angular/core';
import {STATE} from './../tab1/orders/state';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  public orderList: any = [
    {id: "29734", name: "Feijoada", price: 5.99, user: "DiogoN", state: STATE.COOKING, image: "bacalhau.jpg"},
    {id: "98312", name: "Pernas de Frango", price: 7.39,  user: "Asgard",state: STATE.COOKING, image: "frango.png"},
    {id: "42355", name: "Caldo Verde", price: 10.45,  user: "RogueLiker", state: STATE.COOKING, image: "caldo.jpg"},
    {id: "19347", name: "Vitela Estufada", price: 12.45,  user: "Megaman2", state: STATE.COOKING, image: "cozido.jpg"},
    {id: "29734", name: "Legumes Cozidos", price: 5.99, user: "DiogoN", state: STATE.COOKING, image: "bacalhau.jpg"},
    {id: "98312", name: "Bifes com Míscaros", price: 6.39,  user: "Asgard",state: STATE.COOKING, image: "frango.png"},
    {id: "42355", name: "Robalo", price: 1.99,  user: "RogueLiker", state: STATE.COOKING, image: "caldo.jpg"},
    {id: "19347", name: "Petingas", price: 12.45,  user: "Megaman2", state: STATE.COOKING, image: "cozido.jpg"},
  ];

  constructor() {}

}
