import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ModalService } from '../services/modal.service';



@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    AuthModalComponent
  ],
  providers:[ModalService]
})
export class UserModule { }