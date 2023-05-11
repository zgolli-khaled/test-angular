import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductServiceService } from '../services/product-service.service';
import { ConsumService } from '../services/consum.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string = 'E-Commerce';
  listProduct!: Product[];

  products !: Product[];
  priceMax!: number;

  constructor(private sproduct: ConsumService,) { }

  ngOnInit(): void {
    this.sproduct.getProduct().subscribe({
      next: (data) => this.listProduct = data,

      error: (error) => console.log(error),

      complete: () => console.log("end")


    })
  }
  increment(i: number) {
    this.listProduct[i].like++;
  }
  decrement(i: number) {
    this.listProduct[i].quantity--;
  }

}
