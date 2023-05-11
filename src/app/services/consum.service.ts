import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumService {
  url = 'http://localhost:3000/products';

  constructor(private _http: HttpClient) { }
  getProduct() {
    return this._http.get<Product[]>(this.url)
  }

  getProducById(id: number) {
    return this._http.get<Product>(this.url + '/' + id)
  }


  addProduct(product: Product) {
    return this._http.post<Product>(this.url, product);
  }

  deleteProduct(id: number) {
    return this._http.delete<Product>(this.url + '/' + id);
  }


  updateProduct(product: Product, id: number) {
    return this._http.put<Product>(this.url + '/' + id, product);
  }


}
