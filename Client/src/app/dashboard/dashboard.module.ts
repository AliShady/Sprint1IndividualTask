import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CartComponent } from '../cart/cart.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, StoreModule,FormsModule],
  declarations: [DashboardComponent,CompanyComponent,CartComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule { }
