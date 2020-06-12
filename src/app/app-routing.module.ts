import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: AdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
