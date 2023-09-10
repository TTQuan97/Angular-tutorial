import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
//quy ước :component selectors begin with the prefix app-, followed by the component name
//The template and style filenames reference the component's HTML and CSS
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//this class handles functionality for the component
export class ProductAlertsComponent {


  //property named product, type :Product (interface)
  //Đánh dấu là an input property. Liên kết với DOM trong template
  //@Input():indicates that the property can receive value from parent component.
  //@Input():lets a parent component update data in the child component. 
  @Input()
  product: Product | undefined;

  //Conversely, @Output() lets the child send data to a parent component.
  //Angular provides an EventEmitter class that is used when publishing values 
  //from a component through the @Output() decorator.
  @Output()
  notify = new EventEmitter();




}



