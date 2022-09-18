import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegformRoutingModule } from './regform-routing.module';
import { RegformComponent } from './regform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegformComponent],
  imports: [CommonModule, RegformRoutingModule, ReactiveFormsModule],
})
export class RegformModule {}
