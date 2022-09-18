import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactFormRoutingModule } from './react-form-routing.module';
import { ReactFormComponent } from './react-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactFormComponent
  ],
  imports: [
    CommonModule,
    ReactFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactFormModule { }
