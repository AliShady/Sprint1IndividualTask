import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: '', component: StoreComponent, pathMatch: 'full' },
  {path:'update/:pid', component: UpdateProductComponent},
  {path:'create', component: CreateProductComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [RouterModule],
declarations: []
})
export class StoreRoutingModule { }
