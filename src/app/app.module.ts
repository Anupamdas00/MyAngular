import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveNamePipe } from './pipes/remove-name.pipe';
import { ConvertTempComponent } from './convert-temp/convert-temp.component';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [AppComponent, ToDoListComponent, NewsComponent, RemoveNamePipe, ConvertTempComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule,FormsModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
