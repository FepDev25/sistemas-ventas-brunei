import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  productos = [
    { nombre: 'Zapatillas Running Pro', descripcion: 'Tenis deportivos', precio: 89.99, imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Camiseta Deportiva', descripcion: 'Ropa deportiva', precio: 29.99, imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Balón de Fútbol', descripcion: 'Accesorios', precio: 24.99, imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Raqueta Tenis', descripcion: 'Equipamiento', precio: 119.99, imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Mochila Deportiva', descripcion: 'Accesorios', precio: 45.99, imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Pantalón Deportivo', descripcion: 'Ropa deportiva', precio: 39.99, imagen: 'https://via.placeholder.com/100' },
  ];

}
