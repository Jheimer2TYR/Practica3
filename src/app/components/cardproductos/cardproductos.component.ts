import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {
  productos: Producto[] = [];
  cartProducts: Producto[] = [];  // Añade una propiedad para almacenar los productos del carrito

  constructor(
    private _productoService: ProductosService,
    private router: Router,
    @Inject(CartService) private cartService: CartService   // Inyecta el servicio del carrito
  ) {}

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
    console.log(this.productos);
    this.cartService.getProducts().subscribe(products => this.cartProducts = products);  // Obtén los productos del carrito
  }

  verProducto(idx: number) {
    // Implementa la lógica para ver el producto si es necesario
  }

  addProductToCart(product: Producto) {  // Añade un método para agregar productos al carrito
    this.cartService.addProduct(product);
    console.log(`Producto añadido al carrito: ${product.nombre}`);
  }
}