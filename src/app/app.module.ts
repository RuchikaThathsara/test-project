import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {ManageItemsComponent} from './view/manage-items/manage-items.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from './routing.module';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
