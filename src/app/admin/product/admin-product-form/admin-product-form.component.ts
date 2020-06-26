import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/shared/services/product.service';

import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';

import { publishers } from 'src/app/shared/mock-data/publisher-list';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  publishers;


  invalidBook = false;
  subscription: Subscription;

  ngOnInit(): void {
    this.publishers = publishers;
  }

  add(productAdd): void{
    //console.log(productAdd);
    this.productService.createProduct(productAdd);
    //this.productService.createProduct(product).subscribe(result => console.log(result));
  }

}
