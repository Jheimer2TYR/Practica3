import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Producto[] = [];
  private cartProductsSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  constructor() {}

  getProducts(): Observable<Producto[]> {
    return this.cartProductsSubject.asObservable();
  }

  addProduct(product: Producto) {
    this.cartProducts.push(product);
    this.cartProductsSubject.next(this.cartProducts);
  }

  removeProduct(product: Producto) {
    this.cartProducts = this.cartProducts.filter(p => p !== product);
    this.cartProductsSubject.next(this.cartProducts);
  }

  emptyCart() {
    this.cartProducts = [];
    this.cartProductsSubject.next(this.cartProducts);
  }
}