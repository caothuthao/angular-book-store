import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { Product } from 'src/app/shared/models/product';

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

  selectedProductEdit: Product;

  isAdding: boolean = false;

  isEditting: boolean = false;

  product: Product;

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => this.products = res);
  }

  viewDetail(p: Product){
    this.selectedProduct = p;
  }

  setProduct(pSet: Product){
    this.selectedProductEdit = pSet;
    this.isEditting = true;
  }

  deleteProduct(product: Product) {
    const res = confirm('Are you sure you want to delete?');
    if (res) {
      this.productService.deleteProduct(product.id).subscribe(result => console.log(result));
    }
  }

  onClickAdd(){
    this.isAdding = true;
  }

  submit(){
    
  }
  // submit(){
  //   var p = {
  //        id: '1',
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
