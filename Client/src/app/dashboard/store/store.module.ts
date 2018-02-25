import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { StoreComponent } from './store.component';
import {StoreRoutingModule} from './store-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  providers: [StoreService],
  imports: [
    ThemeModule, StoreRoutingModule, Ng2SmartTableModule,FormsModule
  ],
  declarations: [StoreComponent, UpdateProductComponent]
})
export class StoreModule { }
