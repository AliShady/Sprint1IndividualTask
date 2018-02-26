import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {
  source: any[];
  createMode = false;
  product: any = {};
  toUpdateProduct: any = {};

  error: String;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.storeService.getProducts()
      .subscribe(prods => {
        this.source = prods.data;
      });
  }

  deleteProduct(toDeleteId: any): void {
    this.source = this.source.filter(p => p._id !== toDeleteId);
    this.storeService.deleteProduct(toDeleteId).subscribe();
  }

  enterCreateMode(): void {
    this.createMode = true;
  }

  leaveCreateMode(): void {
    this.createMode = false;
    this.product = {};
    this.error = null;
  }

  createProduct(): void {

    if (!this.product.name || !this.product.price || !this.product.sellerName) {
      this.error = 'Please supply all the required fields.';
      return;
    }

    if (isNaN(Number(this.product.price))) {
      this.error = 'The Price should be a valid number.';
      return;
    }

    this.storeService.createProduct(this.product)
      .subscribe(prod => this.source.push(prod.data));
    this.product = {};
    this.leaveCreateMode();
    this.error = null;
  }

  setToUpdateProduct(product: any): void {
    this.toUpdateProduct = Object.assign({}, product);
  }

  updateProduct(product: any): void {
    if(!product.name||!product.price||!product.sellerName){
      this.error = "Please don't leave empty fields after your edit";
      return;
    }

    if (isNaN(Number(product.price))) {
      this.error = 'The Price should be a valid number after your edit.';
      return;
    }

    this.storeService.updateProduct(product._id, product)
      .subscribe(prod => {
        this.toUpdateProduct = {};
        product.updatedAt = prod.data.updatedAt;
      });
  }

  cancelUpdate(product: any): void {
    product.name = this.toUpdateProduct.name;
    product.sellerName = this.toUpdateProduct.sellerName;
    product.price =this.toUpdateProduct.price;
    this.toUpdateProduct = Object.assign({}, {});
    this.error = null;
  }
}
