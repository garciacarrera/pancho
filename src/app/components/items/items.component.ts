import { Component } from '@angular/core';
import {  Item } from "../../models/items";
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {
items: Item[]=[];
constructor(){}
ngOnInit(): void{
 this.items=[
  {
    id: 0,
    title: 'pancho ',
    price: 550,
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
 ];
}
}
