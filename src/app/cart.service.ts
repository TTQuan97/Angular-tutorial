import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

/*
  * @Injectable:Defines a class as a service and allows Angular 
  to inject this service into other components as a dependency.
  providedIn: an object that tells an injector how to obtain or create a dependency.
  * For any dependency that you need in your app, 
  you must register a provider with the injector in order to 
  the injector can use the provider to create new instances.
  * Or you can register providers with specific Modules or Components,
  You register providers in the metadata of the service (in the @Injectable() decorator), 
  or in the @NgModule() or @Component() metadata 
*/
@Injectable(
  //When you provide the service at the root level, Angular creates a single, 
  //shared instance of this class and injects it into any class that asks for it
  { providedIn: 'root' } //this is default
)
export class CartService {

  //list items in the cart
  items: Product[] = [];

  /*When Angular creates a new instance of a component class, it determines which 
  services or other dependencies that component needs by looking at 
  the constructor parameter types
  */
  constructor(private httpClient: HttpClient) { }

  //add an item to the cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  //get all items in the cart
  getItems() {
    return this.items;
  }

  //clear all item in the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get<{ type: string, price: number, date: string, age: number }[]>(
      "/assets/shipping.json"
    );
  }

  getCategory() {
    return this.httpClient.get<{ id: string, name: string }[]>(
      "http://localhost:8080/api/category"
    );
  }


}
