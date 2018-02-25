import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import {UpdateProductComponent} from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: StoreComponent, pathMatch: 'full' },
  {path:'update/:pid', component: UpdateProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [RouterModule],
declarations: []
})
export class StoreRoutingModule { }
