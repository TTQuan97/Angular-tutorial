
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component'
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ComponentRoot } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ObserableComponent } from './obserableExample/obserable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';


@NgModule(
  {
    declarations: [
      ComponentRoot,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      PageNotFoundComponent,
      CartComponent,
      ShippingComponent,
      ObserableComponent,
      ChildComponent,
    ],  //add các Component vào NgModule, đã add vào là phải dùng, nếu 1 cái ko dc dùng trong index, sẽ ko hiển thị tất cả
    imports: [
      //Angular provides two different approaches to handling user input through forms: 'Reactive forms' and 'Template-driven forms'
      ReactiveFormsModule,//Compared to Template-driven forms, they are more robust: they're more scalable, reusable, and testable. 
      BrowserModule,
      AppRoutingModule,
      HttpClientModule //To use Angular's HttpClient, you must configure your application to use HttpClientModule.
    ],
    providers: [],
    bootstrap: [ComponentRoot]//During the bootstrap process, Angular creates and inserts these components into the index.html
  }
)

export class AppModules { }
