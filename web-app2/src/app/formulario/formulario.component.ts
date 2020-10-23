import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { addProduct, Product } from '../produtos/produtos.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    let product: Product;

    product = {
      name: form.value.name,
      price: form.value.price,
      description: form.value.description,
      rating: form.value.rating,
    }

    addProduct(product);

    form.resetForm()
  }

}
