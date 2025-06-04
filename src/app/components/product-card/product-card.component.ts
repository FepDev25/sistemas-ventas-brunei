import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() producto: {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
  } = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: ''
  };
}
