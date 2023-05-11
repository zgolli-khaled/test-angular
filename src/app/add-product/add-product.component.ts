import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
import { ConsumService } from '../services/consum.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // product!: Product

  product: Product = new Product();


  constructor(private sproduct: ConsumService,
    private _router: Router) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  ajouterProduct() {

    this.sproduct.addProduct(this.product).subscribe(() => {
       this._router.navigateByUrl("/products")

    })
  }

}
