import { Component } from "@angular/core";
import { products } from "../products"

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent {

    productList = products;

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

    //test pass data from child component to parent component
    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
        this.items.push(newItem);
    }
}