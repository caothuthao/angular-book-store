import { Component, OnInit, Input } from '@angular/core';

import { Subscription, throwError } from 'rxjs';

import { ProductService } from 'src/app/shared/services/product.service';

import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';

import { publishers } from 'src/app/shared/mock-data/publisher-list';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  publishers = [];
  
  subscription: Subscription;

  defaultTikiNow = 'false';

  ngOnInit(): void {
    this.publishers = publishers;
  }

  add(addForm): void{
    //console.log(productAdd);
    // const productAdd = addForm.value;
    // const publisher = publishers.find (ele => ele.id === productAdd.publisher);
    // const product = new Product({
    //   ...productAdd,
    //   publisher:publisher?publisher.value:''
    // });
    //this.productService.createProduct(product);
    //this.productService.createProduct(product).subscribe(result => console.log(result));

    //const product = new Product(addForm.value);

    //const product = new Product(addForm.value);

    const product = new Product(addForm.value);
    this.subscription = this.productService.createProduct(product).subscribe(result => console.log(result));

  }

 

}
