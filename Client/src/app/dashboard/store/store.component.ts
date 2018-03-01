import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';
import { UserService } from '../../user.service';

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
  searchProduct: any = {};
  error: String;
  user: any;

  constructor(private storeService: StoreService, private userService: UserService) {
  }

  ngOnInit() {
    this.getProducts();
    this.user = this.userService.getUser();
  }

  getProducts(): void {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function (prods) {
        self.source = prods.data;
        self.source = self.source.filter(function (element, index, array) {
          return element.sellerName === 'Omar Elkilany';
        });
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
    var self = this;
    this.storeService.createProduct(this.product)
      .subscribe(function (prod) {
        if (prod.data.sellerName == 'Omar Elkilany') self.source.push(prod.data);
      });
    this.product = {};
    this.leaveCreateMode();
    this.error = null;
  }

  setToUpdateProduct(product: any): void {
    this.toUpdateProduct = Object.assign({}, product);
  }

  updateProduct(product: any): void {
    if (!this.toUpdateProduct.name || !this.toUpdateProduct.price || !this.toUpdateProduct.sellerName) {
      this.error = "Please don't leave empty fields after your edit";
      return;
    }

    if (isNaN(Number(this.toUpdateProduct.price))) {
      this.error = 'The Price should be a valid number after your edit.';
      return;
    }
    var self = this;
    this.storeService.updateProduct(this.toUpdateProduct._id, this.toUpdateProduct)
      .subscribe(function (prod) {
        product.name = prod.data.name;
        product.sellerName = prod.data.sellerName;
        product.price = prod.data.price;
        product.updatedAt = prod.data.updatedAt;
        self.source = self.source.filter(function (element, index, array) {
          return element.sellerName === 'Omar Elkilany';
        });
        self.toUpdateProduct = Object.assign({}, {});
        self.error = null;
      });
  }

  cancelUpdate(product: any): void {
    this.toUpdateProduct = Object.assign({}, {});
    this.error = null;
  }
}
