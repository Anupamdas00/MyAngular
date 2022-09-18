import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewsComponent } from './news/news.component';
import { ConvertTempComponent } from './convert-temp/convert-temp.component'

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./react-form/react-form.module').then((m) => m.ReactFormModule),
  },
  {
    path: 'regform',
    loadChildren: () =>
      import('./regform/regform.module').then((m) => m.RegformModule),
  },
  {
    path: 'toDoList',
    component: ToDoListComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'convert-temp',
    component: ConvertTempComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
