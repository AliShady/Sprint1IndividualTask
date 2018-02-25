import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';
import { Product } from './Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  source: any;
  productName: String;
  productPrice: Number;


  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
      this.getProducts();
  }

  getProducts(): void {
    this.storeService.getProducts()
      .subscribe(prods =>{
        this.source = prods.data;
      });
  }

  deleteProduct(toDeleteId: any): void {
    this.source = this.source.filter(p => p._id!==toDeleteId);
    this.storeService.deleteProduct(toDeleteId).subscribe();
  }

}
