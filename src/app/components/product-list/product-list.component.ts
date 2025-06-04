import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Import OnInit
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit { // Implement OnInit

  originalProducts = [
    { nombre: 'Zapatillas Running Pro', descripcion: 'Tenis deportivos', precio: 89.99, imagen: 'https://via.placeholder.com/100', categoria: 'Zapatos' },
    { nombre: 'Camiseta Deportiva', descripcion: 'Ropa deportiva', precio: 29.99, imagen: 'https://via.placeholder.com/100', categoria: 'Ropa' },
    { nombre: 'Balón de Fútbol', descripcion: 'Accesorios', precio: 24.99, imagen: 'https://via.placeholder.com/100', categoria: 'Accesorios' },
    { nombre: 'Raqueta Tenis', descripcion: 'Equipamiento', precio: 119.99, imagen: 'https://via.placeholder.com/100', categoria: 'Equipamiento' },
    { nombre: 'Mochila Deportiva', descripcion: 'Accesorios', precio: 45.99, imagen: 'https://via.placeholder.com/100', categoria: 'Accesorios' },
    { nombre: 'Pantalón Deportivo', descripcion: 'Ropa deportiva', precio: 39.99, imagen: 'https://via.placeholder.com/100', categoria: 'Ropa' },
  ];
  displayedProducts: any[] = [];
  searchTerm: string = '';
  categories: string[] = [];
  selectedCategory: string = 'Todos';

  constructor() {
    // Data initialization moved to ngOnInit for consistency with lifecycle hooks
  }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts(): void {
    this.extractCategories();
    this.filterProducts(); // Initial filter application
  }

  extractCategories(): void {
    const allCategories = this.originalProducts.map(p => p.categoria);
    this.categories = ['Todos', ...new Set(allCategories)];
  }

  onSearchTermChange(): void {
    this.filterProducts();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts(); // Re-filter products when category changes
  }

  filterProducts(): void {
    let tempProducts = [...this.originalProducts];

    // Filter by search term
    if (this.searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (this.selectedCategory && this.selectedCategory !== 'Todos') {
      tempProducts = tempProducts.filter(product => product.categoria === this.selectedCategory);
    }

    this.displayedProducts = tempProducts;
  }
}
