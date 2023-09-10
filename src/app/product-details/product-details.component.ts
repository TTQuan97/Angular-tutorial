import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  //ActivatedRoute:contains information about the route and the route's parameters.
  //Inject the cart service by adding it to the constructor().
  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }
  /*
  extract the pId from the route parameters 
  and find the corresponding product in the products array.
  */
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('pId'));
    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addTocart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
