import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';

import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  selectedProduct: Product;

  isAdding: boolean = false;

  ngOnInit(): void {
    this.products = products;
    this.productService.$newProduct.subscribe(newProduct => {
      this.products.push(newProduct);
      this.isAdding = false;
    })
    
  }

  viewDetail(p){
    this.selectedProduct = p;
  }

  onClickAdd(){
    this.isAdding = true;
  }

  submit(){
    
  }
  // submit(){
  //   var p = {
  //        $key: '1',
  //       title: 'Guinness World Records 2019: Wild Things (Paperback)',
  //       imageUrl: 'https://salt.tikicdn.com/cache/280x280/ts/product/ca/c9/70/743112ce044389f3155b72bb2629ca2f.jpg',
  //       author: 'Guinness World Records',
  //       finalPrice: 197050,
  //       regularPrice: 330000,
  //       publisher: 'MacMillan Publishers',
  //       publishedDate: '11-2018',
  //       size: '190 x 264 x 11 mm',
  //       pageCount: 216,
  //       isTikiNow: false
  //   }
  //   this.productService.createProduct(p).subscribe(result => console.log(result));
  // }

}
