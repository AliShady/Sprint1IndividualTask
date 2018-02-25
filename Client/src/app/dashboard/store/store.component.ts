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

  storeTableSettings = {
    columns: {
      name: {
        title: 'Name',
        editable: true,
        addable: true
      },
      price: {
        title: 'Price',
        editable: true,
        addable: true
      },
      createdAt: {
        title: 'Created At',
        editable: true,
        addable: true
      },
      updatedAt: {
        title: 'Updated At',
        editable: true,
        addable: true
      },
      sellerName: {
        title: 'Seller',
        editable: true,
        addable: true
      }
    }
  };

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
        console.log(this.source);
      });
  }

  createProduct(): void { 
    this.storeService.createProduct({name: this.productName,
    price: this.productPrice
    }).subscribe(product =>{this.source.push(product.data)});
  }



}
