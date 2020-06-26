import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { publishers } from 'src/app/shared/mock-data/publisher-list';

import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product-reactive-form',
  templateUrl: './admin-product-reactive-form.component.html',
  styleUrls: ['./admin-product-reactive-form.component.scss']
})
export class AdminProductReactiveFormComponent implements OnInit {

  adding: FormGroup;

  publishers;
  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers = publishers;

    this.adding = new FormGroup({
      title: new FormControl('',Validators.required),
      imageUrl: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      finalPrice: new FormControl('',Validators.required),
      regularPrice: new FormControl('',Validators.required),
      publisher: new FormControl('',Validators.required),
      publishedDate: new FormControl(),
      size: new FormControl(),
      pageCount: new FormControl(),
      isTikiNow: new FormControl()
    });
  }

  onSubmit(productAdd) {
    console.log(productAdd);
    
    this.productService.createProduct(productAdd);
  }

}
