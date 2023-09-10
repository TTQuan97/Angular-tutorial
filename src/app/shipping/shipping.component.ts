import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number, date: string, age: number }[]>;
  categoryList!: Observable<{ id: string, name: string }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.categoryList = this.cartService.getCategory();

  }
}
