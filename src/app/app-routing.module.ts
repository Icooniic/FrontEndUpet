import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./UPet/components/login/login.component";
import {SignUpComponent} from "./UPet/components/sign-up/sign-up.component";
import {HomeOwnerComponent} from "./UPet/components/home-owner/home-owner.component";

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'register',component: SignUpComponent},
  {path:'home',component:HomeOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
