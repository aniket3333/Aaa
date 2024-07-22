import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpLoginComponent } from './component/login/emp-login/emp-login.component';

const routes: Routes = [
  {
path:'',
redirectTo:'login',
pathMatch:'full'
  },
  {
path:'login',
component:EmpLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
