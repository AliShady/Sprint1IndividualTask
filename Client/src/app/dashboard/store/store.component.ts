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
  }

  createProduct(): void {
    this.storeService.createProduct(this.product)
      .subscribe(prod => this.source.push(prod.data));
      this.product={};
    this.leaveCreateMode();
  }

  setToUpdateProduct(product: any): void {
    this.toUpdateProduct = product;
  }

  updateProduct(product: any): void {
    this.storeService.updateProduct(product._id, product)
      .subscribe(prod => {
      this.toUpdateProduct = {};
      product.updatedAt = prod.data.updatedAt;
      });
  }

  cancelUpdate(): void {
    this.toUpdateProduct = {};
  }

}
