import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe';
import { UserComponent } from './user/user.component';
import { FoodsComponent } from './foods/foods.component';
import { CustomersComponent } from './customers/customers.component'

@NgModule({
  declarations: [AppComponent, ChildComponent, UsdtoinrPipe, UserComponent, FoodsComponent, CustomersComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
