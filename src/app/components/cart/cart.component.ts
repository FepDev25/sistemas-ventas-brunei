import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items = [
    { nombre: 'Zapatillas Running Pro', precio: 89.99, cantidad: 1, imagen: 'https://via.placeholder.com/50' },
    { nombre: 'Camiseta Deportiva', precio: 29.99, cantidad: 2, imagen: 'https://via.placeholder.com/50' },
    { nombre: 'Balón de Fútbol', precio: 24.99, cantidad: 1, imagen: 'https://via.placeholder.com/50' }
  ];

  get subtotal() {
    return this.items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }

  get iva() {
    return this.subtotal * 0.12;
  }

  get total() {
    return this.subtotal - 10 + this.iva; // $10 descuento fijo
  }
}
