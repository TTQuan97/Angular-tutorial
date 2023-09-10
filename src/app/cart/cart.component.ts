import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productList = this.cartService.getItems();
  /*
  *`FormGroup` is one of the 4 fundamental building blocks used to define forms in Angular,
  *along with `FormControl`, `FormArray`, and `FormRecord`.
  */
  /*
  group():Constructs a new `FormGroup` instance
  */
  checkoutForm = this.formBuilder.group(
    {
      name: '',
      address: ''
    }
  )

  /** The `FormBuilder` provides syntactic sugar that shortens creating instances of a
    * `FormControl`, `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex forms.
    * This service is part of the 'ReactiveFormsModule' module
    * */
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    this.productList = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
