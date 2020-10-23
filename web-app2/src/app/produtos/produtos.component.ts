import { Component, OnInit, PipeTransform} from '@angular/core';

export interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
}

var PRODUCTS: Product[] = [
  {
    name: 'Xbox One',
    price: 2099.00,
    description: 'VIDEOGAME PARA TODOS',
    rating: 10,
  },
  {
    name: 'PS5 Sony',
    price: 1999.00,
    description: 'VIDEOGAME INFATIL',
    rating: 8,
  },
  {
    name: 'PS VITAS',
    price: 99.00,
    description: 'VOIDEOGAME CRIANÇÂ',
    rating: 2,
  },
  {
    name: 'Dell 8020 18 POL',
    price: 3999.99,
    description: 'NOTEBOOK ESTUDANTE',
    rating: 10,
  }
]

export function addProduct(product: Product): void {
  PRODUCTS.push(product);
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})

export class ProdutosComponent implements OnInit {
  public products: Product[]

  constructor() {
    this.products = PRODUCTS;
  };

  deleteProduct(product: Product): void {
    let products = this.products;
    this.products = products.filter((p) => p !== product)
  }

  ngOnInit(): void {
  }

}
