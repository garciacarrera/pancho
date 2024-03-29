import { Component } from '@angular/core';
import {  Item } from "../../models/items";
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {
items: Item[]=[];
total:number=0;

constructor(){}
ngOnInit(): void{

 this.items=[
  {
    id: 0,
    title: 'pancho ',
    price: 1000,
    quantity:1,
    completed: false
  },
  {
    id: 1,
    title: 'pancho doble',
    price: 1000,
    quantity:1,
    completed: true 
  },
  {
    id: 2,
    title: 'cono de papa',
    price: 100,
    quantity:1,
    completed: false 
  },
 ];
 this.getTotal();
}
deleteItem(item:Item){
  this.items=this.items.filter(x=> x.id != item.id)
  this.getTotal();
}
toggleItem(item:Item){
  this.getTotal()
}
getTotal(){
 this.total = this.items
          .filter(item=> !item.completed)
          .map(item=>item.quantity *item.price)
          .reduce((acc,item)=>acc +=item, 0);
  

}
}
