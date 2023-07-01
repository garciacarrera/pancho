import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  
  @Input() item:Item = new Item();
  @Output() deleteItem:EventEmitter<Item> = new EventEmitter();
 constructor(){}
 ngOnInit():void{}
 onDelete(item:Item){
  this.deleteItem.emit(item);

 }
 onToggle(Item: Item){
  this.item.completed=!this.item.completed; 
 }
}
