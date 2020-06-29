import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';
import { products } from '../mock-data/product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProduct = new Subject<Product>(); // de phat di 1 gia tri, dung noi bo trong service nay nen de la private
  $newProduct = this.newProduct.asObservable(); // $newProduct de cho thang khac subcribe

  constructor(private http: HttpClient) { }

  createProduct(product: Product) {
    return this.http.post('https://book-store-5fbe4.firebaseio.com/product.json', product);
    //this.newProduct.next(product);
  }

  getProduct() {
    return this.http.get('https://book-store-5fbe4.firebaseio.com/product.json').pipe(
      map(data => {
        const products: Product[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            products.push(new Product({ ...data[key], id: key }));
          }
        }
        return products;
      })
    );
  };

  updateProduct(product: Product) {
    const pid = product.id;
    delete product.id;
    return this.http.put(`https://book-store-5fbe4.firebaseio.com/product/${pid}.json`, product);
  }

  deleteProduct(pid) {
    return this.http.delete(`https://book-store-5fbe4.firebaseio.com/product/${pid}.json`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

