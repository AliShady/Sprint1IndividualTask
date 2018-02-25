import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule, StoreModule],
  declarations: [DashboardComponent,CompanyComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
