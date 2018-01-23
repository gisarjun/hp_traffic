import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../guard/auth.guard';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { PolicedetailsComponent } from '../component/policedetails/policedetails.component';
import { UserlicenseComponent } from '../component/userlicense/userlicense.component';
import { VehiclesComponent } from '../component/vehicles/vehicles.component';
import { CasehistoryComponent } from '../component/casehistory/casehistory.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './header/header.module';

import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'policedetails', pathMatch: 'full'},
    { path: 'policedetails', component: PolicedetailsComponent, canActivate: [AuthGuard] },
    { path: 'userlicense', component: UserlicenseComponent, canActivate: [AuthGuard] },
    { path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard] },
    { path: 'casehistory/:police_id', component: CasehistoryComponent, canActivate: [AuthGuard] }
  ] , canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    DashboardComponent,
    PolicedetailsComponent,
    UserlicenseComponent,
    VehiclesComponent,
    CasehistoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    SidebarModule,
    HeaderModule,
    DataTablesModule.forRoot(),
    CommonModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
