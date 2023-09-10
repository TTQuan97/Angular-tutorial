import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


//create a array Route to Define your routes in your Routes array.
//path :defines the URL path for the route.
//component :defines the component Angular should use for the corresponding path.
const routes: Routes = [
  {
    path: 'products/:pId',
    component: ProductDetailsComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
