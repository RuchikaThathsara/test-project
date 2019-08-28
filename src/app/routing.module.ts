import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {ManageItemsComponent} from './view/manage-items/manage-items.component';
import {CanDeactivateGuard} from './guard/can-deactivate.guard';
import {LoginComponent} from './view/login/login.component';
import {CanActivateGuard} from './guard/can-activate.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'customers',
    component: ManageCustomersComponent,
    canDeactivate: [CanDeactivateGuard],
    canActivate: [CanActivateGuard]
  },
  {
    path: 'items',
    component: ManageItemsComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
