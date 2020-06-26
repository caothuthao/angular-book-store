import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>(); // de phat di 1 gia tri, dung noi bo trong service nay nen de la private
  $newProduct = this.newProduct.asObservable(); // $newProduct de cho thang khac subcribe

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    //return this.http.post('https://book-store-5fbe4.firebaseio.com/product.json',{product});
    this.newProduct.next(product);
  }

  // getProduct(){
  //   return this.http.get('https://book-store-5fbe4.firebaseio.com/product.json').pipe(
  //     map(data => {
  //       const product: Product[] = [];
  //       for (const key in data) {
  //         if (data)
          
  //       }
  //     })
  //   )
  // }
}
