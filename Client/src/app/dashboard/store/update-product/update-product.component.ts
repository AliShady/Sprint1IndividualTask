import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute,
    private storeService: StoreService, private location: Location) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.paramMap.get('pid'));
  }

  getProduct(id: any): void{
    this.storeService.getProduct(id)
    .subscribe(prod => {
      this.product = prod.data; });
  }

  updateProduct(): void {

  }

}
