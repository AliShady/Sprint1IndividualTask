import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product = {
    name: "",
    price: null,
    sellerName: ""
  };

  constructor(private storeService:StoreService, private location: Location) { }

  ngOnInit() {
  }

  createProduct(): void { 
    this.storeService.createProduct(this.product).subscribe();
    this.location.back();
  }



}
