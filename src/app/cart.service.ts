import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  /* store the array of the current products in the cart. */
  items = [];

  /* appends a product to an array of items */
  addToCat(product) {
    this.items.push(product);
  }

  /*  collects the items users add to the cart and returns each item with its associated quantity. */
  getItems() {
    return this.items;
  }

  /* returns an empty array of items.*/
  clearCart() {
    this.items = []
    return this.items;
  }

}