import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { publishers } from 'src/app/shared/mock-data/publisher-list';

import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-admin-product-reactive-form',
  templateUrl: './admin-product-reactive-form.component.html',
  styleUrls: ['./admin-product-reactive-form.component.scss']
})
export class AdminProductReactiveFormComponent implements OnInit {
  @Input() product: Product;

  productForm: FormGroup;

  publishers = [];
  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.publishers = publishers;

    this.productForm = new FormGroup({
      id: new FormControl(this.product.id, Validators.required),
      title: new FormControl(this.product.title, Validators.required),
      imageUrl: new FormControl(this.product.imageUrl, [Validators.required, Validators.pattern('(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)')]),
      author: new FormControl(this.product.author, Validators.required),
      finalPrice: new FormControl(this.product.finalPrice, Validators.required),
      regularPrice: new FormControl(this.product.regularPrice, Validators.required),
      publisher: new FormControl(this.product.publisher, Validators.required),
      publishedDate: new FormControl(this.product.publishedDate),
      size: new FormControl(this.product.size),
      pageCount: new FormControl(this.product.pageCount),
      isTikiNow: new FormControl(this.product.isTikiNow)
    });
  }


  onSubmit(): void {
    const product = new Product(this.productForm.value);
    this.productService.updateProduct(product).subscribe(result => console.log(result));
  }

}
