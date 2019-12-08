import { Component } from '@angular/core';
import {STATE} from './orders/state';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  

  public orderList: any = [
    {id: "29734", name: "Bacalhau a Brás", price: 5.99, user: "DiogoN", state: STATE.COOKING, image: "bacalhau.png"},
    {id: "98312", name: "Pernas de Frango", price: 4.39,  user: "Asgard",state: STATE.COOKING, image: "frango.png"},
    {id: "42355", name: "Caldo Verde", price: 1.99,  user: "RogueLiker", state: STATE.COOKING, image: "caldo.png"},
    {id: "19347", name: "Cozido a Portuguesa", price: 12.45,  user: "Megaman2", state: STATE.COOKING, image: "cozido.png"},
  ];

  constructor() {

  }

  public getImagePath(item: any): string{
    return `${"/assets/menu/"}${item.image}`
  }


  public finishOrder(item){
    this.orderList = this.orderList.filter((el)=> el.id !== item.id)
  }


    public checkNoOrders(): boolean{
      return this.orderList.length === 0;
    }

}
