import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() item: {
    nombre: string;
    precio: number;
    cantidad: number;
    imagen: string;
  } = {
    nombre: '',
    precio: 0,
    cantidad: 1,
    imagen: ''
  };
}
