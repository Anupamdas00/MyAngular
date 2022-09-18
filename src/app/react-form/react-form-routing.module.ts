import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactFormComponent } from './react-form.component';

const routes: Routes = [{ path: '', component: ReactFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactFormRoutingModule { }
